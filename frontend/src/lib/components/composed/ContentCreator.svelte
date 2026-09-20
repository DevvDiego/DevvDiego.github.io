<script>

    import Label from '../base/Label.svelte';
    import Textarea from './form/Textarea.svelte';
    import Modal from '../base/Modal.svelte';
    import Select from './form/Select.svelte';
    import Danger from '$lib/assets/icons/danger.svelte';
    import Edit from '$lib/assets/icons/edit.svelte';

    let { 
        postContent = $bindable(),
        label
    } = $props();

    let canDelete = $state(true);
    let editingIndex = $state(null);
    
    let newBlockType = $state('paragraph');
    let newBlockText = $state("");

    let currentBlockType = $state("paragraph");
    let currentBlockText = $state("");

    let addModalStatus = $state(false);
    let editModalStatus = $state(false);

    const toggleAddModal = () => addModalStatus = !addModalStatus;
    const toggleEditModal = () => editModalStatus = !editModalStatus;

    function addBlock() {
        //TODO??: add an alert of no content found and dont overwrite???
        if (!postContent) postContent = [];
        
        const newBlock = { type: newBlockType, text: newBlockText };
        if (newBlockType === 'code') {
            newBlock.language = 'javascript';
            newBlock.code = '';
        }
        
        postContent = [...postContent, newBlock];
        
        toggleAddModal(); // should be off after this fn

        newBlockType = 'paragraph'; // reset to default
    }

    function deleteBlock(index) {
        
        if( canDelete == false ) return;

        postContent = postContent.filter((_, i) => i !== index);

        canDelete = false;

        setInterval(()=>{
            // debounce item deletion so no accidents
            canDelete = true;
        }, 3000);
    }

    function loadBlock(index){
        editingIndex = index;

        // preload values for the modal
        const block = postContent[index];
        currentBlockType = block.type;
        currentBlockText = block.text || block.code || ''; // Depende del tipo

        toggleEditModal();
    }

    function editBlock(){
        if (editingIndex === null) return; 

        let updates = {
            type: currentBlockType,
            text: currentBlockText
        };

        postContent = postContent.map((block, idx) => {
            if( idx === editingIndex ) return {...block, ...updates};

            //otherwise
            return block;

        })

        editingIndex = null;
        toggleEditModal(); // should be off after this fn
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


<!-- 
    find a way to maybe not trigger the two modals?
    or maybe just add them onto a list and that
-->

<Modal open={editModalStatus} title="Modify a content block" isDestructive={true}>

    <h1>destructive modal</h1>

    <Select
        bind:value={currentBlockType}
        class="pr-8 bg-zinc-700 border border-zinc-600 text-white mb-4"
    >
        <option value="paragraph">📝 Paragraph</option>
        <option value="subtitle">📖 Subtitle</option>
        <option value="tip">💡 Tip</option>
        <option value="code">💻 Code</option>
    </Select>

    <Textarea 
        id="newBlockText" label="Texto" rows="6" 
        bind:value={currentBlockText}
    ></Textarea>

    <div class="flex gap-2 justify-end">
        <button 
            onclick={ ()=>{toggleEditModal(); editingIndex=null} }
            class="px-4 py-2 text-zinc-300 hover:text-white"
        >
            Cancel
        </button>
        <button 
            type="button" onclick={ editBlock }
            class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
            Finish changes
        </button>
    </div>

</Modal>



<Modal open={addModalStatus} title="Add new content block">

    
    <Select
        bind:value={newBlockType}
        class="pr-8 bg-zinc-700 border border-zinc-600 text-white mb-4"
    >
        <option value="paragraph">📝 Paragraph</option>
        <option value="subtitle">📖 Subtitle</option>
        <option value="tip">💡 Tip</option>
        <option value="code">💻 Code</option>
    </Select>

    <Textarea 
        id="newBlockText" label="Texto" rows="6" 
        bind:value={newBlockText}
    ></Textarea>
    
    <div class="flex gap-2 justify-end">
        <button 
            onclick={ toggleAddModal }
            class="px-4 py-2 text-zinc-300 hover:text-white"
        >
            Cancel
        </button>
        <button 
            type="button" onclick={ addBlock }
            class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
            Add Block
        </button>
    </div>

</Modal>



<Label>
    {label}
</Label>

<article class="max-w-3xl w-full bg-zinc-800/50 rounded-xl border border-zinc-700/30 p-8">
    
    <div class="mb-6">
        <button 
            type="button" onclick={ toggleAddModal }
            class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 flex items-center gap-2"
        >
            <!-- Add icon? -->
            Add Content Block
        </button>
    </div>

    <!-- Content Blocks -->
    <div class="article-content space-y-6">
        {#each postContent as item, index}

            <div class="border border-zinc-600/50 rounded-lg p-4 relative group">
                
                <div class="absolute -top-2 right-2 flex flex-row gap-6">

                    <button 
                        type="button"
                        onclick={() => deleteBlock(index)}
                        class="
                            w-7 h-7 bg-red-600 text-white 
                            rounded-full opacity-0 group-hover:opacity-100 transition-opacity 
                            flex items-center justify-center text-xs
                    ">
                        <Danger/>
                    </button>
                    
                    <button 
                        type="button"
                        onclick={() => loadBlock(index)}
                        class="
                            w-7 h-7 bg-blue-500 text-white 
                            rounded-full opacity-0 group-hover:opacity-100 transition-opacity 
                            flex items-center justify-center text-xs
                    ">
                        <Edit/>
                    </button>

                </div>

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