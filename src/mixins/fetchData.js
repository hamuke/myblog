// 公共的远程获取数据的代码
// 具体的组件中，需要提供一个远程获取数据的方法  fetchData
export default function (defaultData = null) {
    return {
        data() {
            return {
                isLoading: true,
                data: defaultData,
            };
        },
        async created() {
            this.data = await this.fetchData();
            this.isLoading = false;
        },
    };
}