<template>
  <div>
    <Exception v-if="error == 1"></Exception>
    <div class="fast" v-if="error == 0">
      <a-table :columns="columns"
               rowKey="id"
               :dataSource="orderList"
               :pagination="pagination">
        <span slot="id"
              slot-scope="id"
              style="cursor: pointer"
              @click="showOrderDetail(id)">
          {{id}}
        </span>
        <span slot="type"
              slot-scope="type">
          快捷配音
        </span>
        <span slot="income"
              slot-scope="income">
          {{income}}元
        </span>
        <div slot="payment"
              slot-scope="payment">
          <span v-if="payment == 1">待支付</span>
          <span v-if="payment == 2">已支付</span>
        </div>
        <div slot="status"
             slot-scope="status">
          <span v-if="status == 0">待支付</span>
          <span v-if="status == 1">进行中</span>
          <span v-if="status == 9">已完成</span>
          <span v-if="status == 2">修改中</span>
          <span v-if="status == 8">已取消</span>
        </div>
        <span slot="click"
              slot-scope="click"
              style="background: #ffe799;padding: 5px 15px;border-radius: 4px;font-size: 12px;cursor: pointer">
          下载
        </span>
      </a-table>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import Exception from '../exception/500'
  import {handlerError} from 'api/catch'
  const columns = [
    { title: '订单号', dataIndex: 'id', key: 'id', scopedSlots: { customRender: 'id' }},
    { title: '订单', dataIndex: 'title', key: 'title', scopedSlots: { customRender: 'title' }},
    { title: '订单类型', dataIndex: 'type', key: 'type', scopedSlots: { customRender: 'type' }},
    { title: '订单金额', dataIndex: 'income', key: 'income', scopedSlots: { customRender: 'income' }},
    { title: '支付状态', dataIndex: 'payment', key: 'payment' , scopedSlots: { customRender: 'payment' }},
    { title: '配音状态', dataIndex: 'status', key: 'status', scopedSlots: { customRender: 'status' }},
    { title: '操作' , key: 'click' , scopedSlots: { customRender: 'click' }}
  ];
  export default {
    inject:['reload'],
    components: {Exception},
    data() {
      return {
        error:0,
        isUpdataSize:false,
        data: [],
        orderList:[],
        pagination: {
          defaultPageSize : 11,
          total:0,
          showTotal :total => `共 ${total} 条`,
        },
        loading: false,
        isSuccse:false,
        columns,
      }
    },
    methods: {
      handleTableChange(pagination, filters, sorter) {

      },
      beforeUpload(file){
        console.log(file)
        const upType = file.type === 'audio/mp3'
        let upSize = file.size
        if(upSize < 20100000){
          this.isUpdataSize = true
        }
        if(!upType){
          this.$message.error('文件上传格式错误，只允许上传mp3格式')
        }else if(!this.isUpdataSize){
          console.log(this.isUpdataSize,'isUpdataSize')
          this.$message.error('文件大小超过上限')
        }
      },
      handleChange(file){
        console.log(file)
        if(file.file.status == 'done'){
          this.$message.success('音频上传成功')
          this.reload()
        }
      },
      toFastDetail(id){
        console.log(id)
        axios.get('api/order/'+id+'/detail').then(res => {
          this.$router.push({
            name: 'order_fast_detail',
            params: {
              id:id
            }
          })
        }).catch(err => {
          const errorStatus = err.response.status
          if(errorStatus == '401'){
            this.$router.replace('/login')
          }
          if(errorStatus == '500'){
            this.error = 1
          }
        })

      },
      showOrderDetail(id){
        this.$router.push({
          name: 'order_detail',
          params: {
            id:id,
          }
        })
      },
    },
    mounted(){
      axios.get('api/customer/order').then(res => {
        this.orderList = res.data.data
        console.log(res.data)
      }).catch(err => {
        const errorStatus = err.response.status
        if(errorStatus == '500'){
          this.error = 1
        }else{
          handlerError(err.response.data)
        }
      })
    },
  }

</script>
<style lang="scss" scoped>
  .fast{
    background: #ffffff;
    border-radius: 4px;
    margin: 20px 20px 0;
    padding: 20px;
    .details_id{
      &:hover{
        cursor: pointer;
        color: #ffd101;
      }
    }
    .details_click{
       width: 80px;
       font-size: 12px;
       color: #ffffff;
       background: #ffd101;
       border-radius: 4px;
       padding: 4px 8px;
       text-align: center;
       &:hover{
         cursor: pointer;
       }
     }
    .details_no{
      width: 80px;
      font-size: 12px;
      color: #aeaeae;
      background: #f2f2f2;
      border-radius: 4px;
      padding: 4px 8px;
      text-align: center;
      margin-bottom: 0px;
    }
  }
</style>
