<script>
    import { onMount } from 'svelte';
    import Blockly from 'blockly';

    let blocklyDiv;
    var toolbox = {
        kind: 'categoryToolbox',
        contents: [
        {
            kind: 'category',
            name: 'Logic',
            categorystyle: 'logic_category',
            contents: [
            {
                kind: 'block',
                type: 'controls_if',
            },
            {
                kind: 'block',
                type: 'logic_compare',
            },
            {
                kind: 'block',
                type: 'logic_operation',
            },
            {
                kind: 'block',
                type: 'logic_negate',
            },
            {
                kind: 'block',
                type: 'logic_boolean',
            },
            ],
        },
        {
            kind: 'category',
            name: 'Loops',
            categorystyle: 'loop_category',
            contents: [
            {
                kind: 'block',
                type: 'controls_repeat_ext',
                inputs: {
                TIMES: {
                    block: {
                    type: 'math_number',
                    fields: {
                        NUM: 10,
                    },
                    },
                },
                },
            },
            {
                kind: 'block',
                type: 'controls_whileUntil',
            },
            ],
        },
        {
            kind: 'category',
            name: 'Math',
            categorystyle: 'math_category',
            contents: [
            {
                kind: 'block',
                type: 'math_number',
                fields: {
                NUM: 123,
                },
            },
            {
                kind: 'block',
                type: 'math_arithmetic',
            },
            {
                kind: 'block',
                type: 'math_single',
            },
            ],
        },
        {
            kind: 'category',
            name: 'Text',
            categorystyle: 'text_category',
            contents: [
            {
                kind: 'block',
                type: 'text',
            },
            {
                kind: 'block',
                type: 'text_length',
            },
            {
                kind: 'block',
                type: 'text_print',
            },
            ],
        },
        ],
    };

    var startBlocks = {
        blocks: {
        languageVersion: 0,
        blocks: [
            {
            type: 'controls_if',
            inline: false,
            extraState: {
                hasElse: true,
            },
            inputs: {
                IF0: {
                block: {
                    type: 'logic_compare',
                    fields: {
                    OP: 'EQ',
                    },
                    inputs: {
                    A: {
                        block: {
                        type: 'math_arithmetic',
                        fields: {
                            OP: 'MULTIPLY',
                        },
                        inputs: {
                            A: {
                            block: {
                                type: 'math_number',
                                fields: {
                                NUM: 6,
                                },
                            },
                            },
                            B: {
                            block: {
                                type: 'math_number',
                                fields: {
                                NUM: 7,
                                },
                            },
                            },
                        },
                        },
                    },
                    B: {
                        block: {
                        type: 'math_number',
                        fields: {
                            NUM: 42,
                        },
                        },
                    },
                    },
                },
                },
                DO0: {
                block: {
                    type: 'text_print',
                    inline: false,
                    inputs: {
                    TEXT: {
                        block: {
                        type: 'text',
                        fields: {
                            TEXT: "Don't panic",
                        },
                        },
                    },
                    },
                },
                },
                ELSE: {
                block: {
                    type: 'text_print',
                    inline: false,
                    inputs: {
                    TEXT: {
                        block: {
                        type: 'text',
                        fields: {
                            TEXT: 'Panic',
                        },
                        },
                    },
                    },
                },
                },
            },
            },
        ],
        },
    };
    onMount(() => {
        var demoWorkspace = Blockly.inject(blocklyDiv, {
             media: './node_modules/blockly/media/',
             toolbox: toolbox,
     });
         Blockly.serialization.workspaces.load(startBlocks, demoWorkspace);
    });

    function showCode() {
        // Generate JavaScript code and display it.
        javascript.javascriptGenerator.INFINITE_LOOP_TRAP = null;
        var code =
        javascript.javascriptGenerator.workspaceToCode(demoWorkspace);
        alert(code);
    }

    function runCode() {
        // Generate JavaScript code and run it.
        window.LoopTrap = 1000;
        javascript.javascriptGenerator.INFINITE_LOOP_TRAP =
        'if (--window.LoopTrap < 0) throw "Infinite loop.";\n';
        var code =
        javascript.javascriptGenerator.workspaceToCode(demoWorkspace);
        javascript.javascriptGenerator.INFINITE_LOOP_TRAP = null;
        try {
        eval(code);
        } catch (e) {
        alert(e);
        }
    }
</script>
<div id="buttonsandcode">
    <p>
        <button onclick="showCode()">Show JavaScript</button>
        <button onclick="runCode()">Run JavaScript</button>
    </p>
    <div bind:this={blocklyDiv} style="height: 480px; width: 600px"></div>
</div>
<style>
    #buttonsandcode {
        background-color: #fff;
        font-family: sans-serif;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
    }
</style>

    