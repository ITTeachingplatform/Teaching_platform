<template>
    <div >
        <div id="editor"></div>
        <el-button @click="onSubmit">提交</el-button>
    </div>
</template>

<script>
export default {
    name:'Editor',
    data(){
        return{
            editor:null
        }
    },
    mounted(){
      this.editor = UE.getEditor('editor', {
        toolbars: [//工具栏
            [ 'undo', //撤销
              'redo', //重做
              'bold', //加粗
              'indent', //首行缩进
              'italic', //斜体
              'underline', //下划线
              'strikethrough', //删除线
              'subscript', //下标
              'superscript', //上标
              'formatmatch', //格式刷
              'removeformat', //清除格式
              'fontfamily', //字体
              'fontsize', //字号
              'simpleupload', //单图上传
              'link', //超链接
              'justifyleft', //居左对齐
              'justifyright', //居右对齐
              'justifycenter', //居中对齐
              'justifyjustify', //两端对齐
              'forecolor', //字体颜色
              'backcolor', //背景色
              'attachment', //附件
              'inserttable', //插入表格
              ]
        ],
        autoHeightEnabled: true,
        autoFloatEnabled: true,
        initialFrameHeight:300
        });
    },
    methods: {
        getUeditorContent(){
        console.log(this.editor.getContent());
      },
      onSubmit() {
        getUeditorContent();
        console.log('submit!');
      },
    },
    destoryed(){
        this.editor.destroy();
    }
}
</script>

<style>

</style>
