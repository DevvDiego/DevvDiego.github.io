<script>

    let { post = $bindable() } = $props();
    let showModal = $state(false);
    let newBlockType = $state('paragraph');
    let newBlockText = $state("");

    const changeModalStatus = () => { showModal = !showModal; };

    function addBlock() {
        if (!post.content) post.content = [];
        
        const newBlock = { type: newBlockType, text: newBlockText };
        if (newBlockType === 'code') {
            newBlock.language = 'javascript';
            newBlock.code = '';
        }
        
        post.content = [...post.content, newBlock];
        showModal = false;
        newBlockType = 'paragraph'; // reset to default
    }

    function deleteBlock(index) {
        post.content = post.content.filter((_, i) => i !== index);
    }
</script>

{#snippet paragraph(item)}
    <p class="text-zinc-300 leading-relaxed mb-4">{item.text}</p>
{/snippet}

{#snippet subtitle(item)}
    <h2 class="text-2xl font-semibold pt-8 mt-8 border-t border-zinc-700/50 mb-4">{item.text}</h2>
{/snippet}

{#snippet tip(item)}
    <div class="bg-zinc-800/80 p-4 rounded-lg border-l-4 border-blue-500 mb-6">
        <p class="text-zinc-200 italic">💡 {item.text}</p>
    </div>
{/snippet}

{#snippet code(item)}
    <div class="bg-zinc-900 p-4 rounded-lg mb-6">
        <div class="flex justify-between items-center mb-2">
            <span class="text-zinc-400 text-sm">{item.language}</span>
        </div>
        <pre class="overflow-x-auto">
            <code class="text-zinc-200 text-sm">{item.code}</code>
        </pre>
    </div>
{/snippet}

<!-- Simple Modal -->
{#if showModal}
<div class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
    <div class="bg-zinc-800 rounded-lg p-6 max-w-md w-full border border-zinc-700">
        <h3 class="text-lg font-semibold mb-4 text-white">Add Content Block</h3>
        
        <select 
            bind:value={newBlockType}
            class="w-full p-2 bg-zinc-700 border border-zinc-600 rounded text-white mb-4"
        >
            <option value="paragraph">📝 Paragraph</option>
            <option value="subtitle">📖 Subtitle</option>
            <option value="tip">💡 Tip</option>
            <option value="code">💻 Code</option>
        </select>

        <label for="newBlockText">Texto</label>
        <input 
            id="newBlockText" bind:value={newBlockText}
            class="w-full p-2 bg-zinc-700 border border-zinc-600 rounded text-white mb-4"
        />
        
        <div class="flex gap-2 justify-end">
            <button 
                onclick={changeModalStatus}
                class="px-4 py-2 text-zinc-300 hover:text-white"
            >
                Cancel
            </button>
            <button 
                onclick={addBlock}
                class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
                Add Block
            </button>
        </div>
    </div>
</div>
{/if}

<article class="max-w-3xl w-full bg-zinc-800/50 rounded-xl border border-zinc-700/30 p-8">
    
    <div class="mb-6">
        <button 
            type="button"
            onclick={changeModalStatus}
            class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 flex items-center gap-2"
        >
            <i class="fas fa-plus"></i>
            Add Content Block
        </button>
    </div>

    <!-- Content Blocks -->
    <div class="article-content space-y-6">
        {#each post.content as item, index}

            <div class="border border-zinc-600/50 rounded-lg p-4 relative group">
                
                <button 
                    onclick={() => deleteBlock(index)}
                    class="absolute -top-2 -right-2 w-6 h-6 bg-red-600 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-xs"
                >
                    x
                </button>
                
                {#if item.type === 'paragraph'}
                    {@render paragraph(item)}
                {:else if item.type === 'subtitle'}
                    {@render subtitle(item)}
                {:else if item.type === 'tip'}
                    {@render tip(item)}
                {:else if item.type === 'code'}
                    {@render code(item)}
                {/if}

            </div>

        {:else}

            <div class="text-center py-8 text-zinc-500">
                <i class="fas fa-plus-circle text-3xl mb-2"></i>
                <p>No content blocks yet. Click "Add Content Block" to start.</p>
            </div>

        {/each}
    </div>
</article>

<style>
    pre {
        white-space: pre-wrap;
        word-wrap: break-word;
    }
    
    code {
        font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
        font-size: 0.9em;
    }
</style>