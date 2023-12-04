import  http from './http.js'
new Vue({
    el:"#app",
    data:{
        searchValue:'',
        tabActiveIndex:'0',
        selectHistoryIndex:null,
        startNum:null,
        endNum:null,
        startWord:{},
        endWord:{},
        tableDataList:[],
        errorExamList:[],
        errorExamIndex:null,
        tabs:[
            {index:'0',label:'全部单词查看'},
            {index:'1',label:'单词测验'},
            {index:'2',label:'历史测验记录'},
            {index:'3',label:'错题本'},
        ],
        randomHistoryList:[],
        config:{
            isShowExampleRow:false,
            isShowExmapleChinese:false, 
            isShowChineseRow:true,
            isShowChinese:true,
        }
    },
    components:{

    },
    methods:{
        //获取随机单词
        async getRandomWords(){
            const tableDataList = await http(`getRandomWords/?start=${this.startNum||null}&end=${this.endNum||null}`)
            tableDataList.map(table=>table.isError = false)
            this.tableDataList  = tableDataList
            layer.msg('获取随机单词列表成功', {icon: 1}); 
        },
        //获取随机单词历史列表
        async getRandomHistoryList(){
            const randomHistoryList = await http(`getRandomHistoryList`)
            this.randomHistoryList  = randomHistoryList
        },
        //获取随机单词历史列表
        async getRandomDetailByIndex(){
            const tableDataList = await http(`getRandomDetailByIndex/${this.selectHistoryIndex}`)
            tableDataList.map(table=>table.isError = false)
            this.tableDataList  = tableDataList
            layer.msg('查询单词详情成功', {icon: 1});
        },
        //获取随机单词历史列表
        async getWordByIndex(index){
            return await http(`getWordByIndex/${index}`)
        },
        //获取随机单词历史列表
        async getAllWordList(){
            const tableDataList = await http('getAllWordList')
            tableDataList.map(table=>table.isError = false)
            this.tableDataList = tableDataList
            layer.msg('查询全部单词成功', {icon: 1});
        },
        //更新单词
        async updateWord(){
            await http('/updateWord')
            // layer.msg('更新词库成功', {icon: 1}); 
        },
        clearStartEndWord(){
            this.startWord = {}
            this.endWord = {}
        },
        async getErrorExamList(){
            const errorExamList = await http('getErrorExamList')
            this.errorExamList = errorExamList
            layer.msg('查询错题本列表成功', {icon: 1});
        },
        async getErrorExamInfoByIndex(){
            const tableDataList = await http(`getErrorExamInfo/${this.errorExamIndex}`)
            tableDataList.map(table=>table.isError = false)
            this.tableDataList = tableDataList
            layer.msg('查询错题本详情成功', {icon: 1});
        },
        async createErrorExam(){
            const tableList = this.tableDataList.filter(table=>table.isError)
            if(!tableList.length){
                layer.msg('请勾选错题', {icon: 2});
                return
            }
            const indexList = tableList.map(table=>table.num)
            await http(`createErrorExamList?indexStr=${indexList.join(',')}`)
            layer.msg('生成错题本成功', {icon: 1});
        },
        tableCellClick(row,column,event){
            row.isError = !row.isError
        }

    },
    watch:{
        async startNum(newVal,oldVal){
            if(!newVal) {return}
            this.startWord = await this.getWordByIndex(newVal)
        },
        async endNum(newVal,oldVal){
            if(!newVal) {return}
            this.endWord = await this.getWordByIndex(newVal)
        },
        tabActiveIndex(){
            this.tableDataList = []
            switch(this.tabActiveIndex){
                case "0":
                    this.getAllWordList()
                    break;
                case '2':
                    this.getRandomHistoryList()
                    break;
                case '3':
                    this.getErrorExamList()
                    break;
            }
        }
    },
    async mounted() {
        await this.updateWord()
        this.getAllWordList()
    },
})