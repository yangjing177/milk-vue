<template>
    <div class="account-info">
      <h3 class="name-title">基础资料</h3>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
        <el-form-item label="用户名：">
          <span>{{ruleForm.username}}</span>
        </el-form-item>
        <el-form-item label="会员类型：">
          <span>个人</span>
        </el-form-item>
        <el-form-item label="手机号码：" prop="mobile">
          <el-input v-model="ruleForm.mobile" style="width: 250px"></el-input>
        </el-form-item>
        <el-form-item label="真实姓名：">
          <el-input v-model="ruleForm.name" style="width: 250px"></el-input>
        </el-form-item>
        <el-form-item label="性别：" prop="sex">
          <el-radio v-model="ruleForm.sex" label="男">男</el-radio>
          <el-radio v-model="ruleForm.sex" label="女">女</el-radio>
        </el-form-item>
        <el-form-item label="身份证号：" prop="idNumber">
          <el-input v-model="ruleForm.idNumber" style="width: 250px"></el-input>
        </el-form-item>
        <el-form-item label="邮箱：" prop="email">
          <el-input v-model="ruleForm.email" style="width: 250px"></el-input>
        </el-form-item>
      </el-form>
      <div class="info-bottom">
        <el-button  type="danger" style="float: left;width: 165px;height: 42px" @click="saveUser">保存</el-button>
      </div>
    </div>
</template>

<script>
    export default {
        name: "AccountInfo",
      data () {
        return {
          ruleForm: {
            id: '',
            username: '',
            password: '',
            mobile: '',
            name: '',
            sex: '',
            idNumber:'',
            email: '',
            createDate: '',
            updateDate: '',
            isDeleted: ''
          },
          rules: {
            mobile:[
              { min: 11, max: 11, message: '请输入正确的手机号', trigger: 'blur', }
            ],
            idNumber:[
              { min: 18, max: 18, message: '请输入正确的身份证号', trigger: 'blur', }
            ],
            email:[
              // { required: true, message: '请输入邮箱地址', trigger: 'blur' },
              { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur'] }
            ]
          }
        }
      },
      created(){
          this.fetchData()
      },
      methods:{
        fetchData() {
          const user=this.user()
          this.$axios.post('/users/findByUsername',
            user,
            {headers: {'Content-Type': 'application/json'}}
          ).then((response) => {
            this.ruleForm = response.data
          }).catch((error) => {
            console.log("error")
          })
        },
        saveUser(){
          this.$axios.post('/users/updateUser',
            JSON.stringify(this.ruleForm),
            {headers: {'Content-Type': 'application/json'}}
          ).then((response) => {
            this.ruleForm = response.data
            alert("信息修改成功")
          }).catch((error) => {
            console.log("error")
          })
        },
        user(){
          return this.$store.state.user
        },
      }
    }
</script>

<style scoped>
.account-info{
  width: 936px;
  /*height: 590px;*/
  margin-left: 40px;

}
  .name-title{
    width: 936px;
    height: 21px;
    font-size: 16px;
    margin-bottom: 25px;
  }
  .info-form{
    width: 936px;
    height: 32px;
    margin-top: 12px;
  }
</style>
