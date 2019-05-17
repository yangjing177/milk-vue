<template>
  <div class="account-info">
    <h3 class="name-title">密码修改</h3>
    <el-form :model="ruleForm" :rules="rules" label-width="100px">
      <el-form-item label="用户名：">
        <span>{{users.username}}</span>
      </el-form-item>
      <el-form-item label="原密码：" prop="passWord">
        <el-input v-model="ruleForm.passWord" style="width: 250px" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="修改密码：" prop="pass">
        <el-input v-model="ruleForm.pass" style="width: 250px" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码：" prop="checkPass">
        <el-input v-model="ruleForm.checkPass" style="width: 250px" autocomplete="off"></el-input>
      </el-form-item>

    </el-form>
    <div class="info-bottom">
      <el-button  type="danger" style="float: left;width: 165px;height: 42px" @click="saveUser">修改密码</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AccountInfo",
    data () {
      var validatePassWord = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else if (value !== this.users.password) {
          callback(new Error('原密码错误!'));
        } else {
          callback();
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        }else if(value.length<5){
          callback(new Error('密码不能小于5位'));
        }else {
          if (this.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if(value.length<5){
          callback(new Error('密码不能小于5位'));
        }else if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm:{
          passWord:'',
          pass:'',
          checkPass:'',
        },
        users: {
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
          passWord:[
            { validator: validatePassWord, trigger: 'blur' }
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
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
          this.users = response.data
        }).catch((error) => {
          console.log("error")
        })
      },
      saveUser(){
        debugger
        this.users.password=this.ruleForm.pass
        this.$axios.post('/users/updateUser',
          JSON.stringify(this.users),
          {headers: {'Content-Type': 'application/json'}}
        ).then((response) => {
          this.ruleForm = response.data
          alert("密码修改成功")
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
    /*height: 400px;*/
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
