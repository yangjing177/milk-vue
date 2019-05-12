<template>
  <div id="bottom">
  <div class="foot">
    <div class="bottom-into clearfix">
      <!--<div class="about-ul">-->
        <!--<div class="about-liti">-->
          <!--<h3>关于我们</h3>-->
        <!--</div>-->
        <!--<div class="about-li"></div>-->
      <!--</div>-->

      <ul class="about-ul clearfix">
        <li class="foot-liti clearfix">
          <h3>关于我们</h3>
        </li>
        <router-link to="/Brief"><li class="clearfix"><a href="javascript:;">随心订简介</a></li></router-link>
        <router-link to="/Contact"><li class="clearfix"><a href="javascript:;">联系我们</a></li></router-link>
          <router-link to="/Recruit"><li class="clearfix"><a href="javascript:;">招贤纳士</a></li></router-link>
      </ul>
      <ul class="hnge clearfix">
        <li class="foot-liti clearfix">
          <h3>随心订功能</h3>
        </li>
          <router-link to="/Cancel"><li class="clearfix"><a href="javascript:;">退订</a></li></router-link>
      </ul>
      <ul class="pay-links">
        <li class="foot-liti clearfix">
          <h3>随心订支付</h3>
        </li>
          <router-link to="/Pay"><li class="clearfix"><a href="javascript:;">支付宝支付</a></li></router-link>
      </ul>
      <ul class="tu-sao clearfix">
        <li class="foot-liti clearfix">
          <h3 class="weininx">随心订官方微信</h3>
          <h3 class="weibos">随心订官方微博</h3>
        </li>
        <li class="clearfix">
          <img alt="" src="../image/weixin.jpg">
          <img alt="" src="../image/weibo.jpg">
        </li>
      </ul>
    </div>
  </div>

  <div class="fotttter clearfix">
    <div class="footer-big clearfix">
      <div class="foot-bottom clearfix">
        <div class="into qued-link clearfix">
          <router-link to="/Map">网站地图</router-link>
          <router-link to="/CopyrightNotice">版权申明</router-link>
          <router-link to="/Problem">常见问题</router-link>
          <router-link to="/Law">法律条款</router-link>
          <router-link to="/FriendlyLinks">友情链接</router-link>
          <a href="javascript:;">营业执照</a>
          <a href="javascript:;">食品经营许可证</a>
          <a href="javascript:;" class="none">客服热线：4258-147-147</a>
        </div>
        <p>版权所有 鲜奶随心订股份有限公司 沪ICP备12043337号-2</p>
      </div>
      <!--<div class="shan-icon clearfix">-->
        <!--<table width="135" border="0" cellpadding="0" cellspacing="0" title="Click to Verify - This site chose Symantec SSL for secure e-commerce and confidential communications.">-->
          <!--<tbody><tr><td width="135" align="center">-->
            <!--<a href="http://www.brightdairy.com"><img src="/brightdairymain2016/images/icon/ficon1.png" alt=""></a>-->
          <!--</td><td width="135" align="center">-->
            <!--<a href="http://www.sgs.gov.cn/lz/licenseLink.do?method=licenceView&amp;entyId=20120702142312739"><img src="/brightdairymain2016/images/icon/ficon2.png" alt=""></a>-->
          <!--</td>-->
            <!--<td width="135" align="center" style="position: relative;top: -6px;"><script type="text/javascript" src="https://seal.websecurity.norton.com/getseal?host_name=www.4008117117.com&amp;size=XS&amp;use_flash=NO&amp;use_transparent=YES&amp;lang=zh_cn"></script><a href="javascript:vrsn_splash()" tabindex="-1"><img name="seal" border="true" src="https://seal.websecurity.norton.com/getseal?at=0&amp;sealid=3&amp;dn=www.4008117117.com&amp;lang=zh_cn&amp;tpt=transparent" oncontextmenu="return false;" alt="Click to Verify - This site has chosen an SSL Certificate to improve Web site security"></a>-->
            <!--</td>-->
          <!--</tr>-->
          <!--</tbody></table>-->
      <!--</div>-->
    </div>
  </div>

  </div>
</template>

<script>
    export default {
        name: "bottom"
    }
</script>

<style scoped>
  .clearfix {
    *zoom: 1;
  }
.foot{
  height: 145px;
  padding-top: 27px;
  padding-bottom: 47px;
  background: #ebebeb;
  min-width: 1200px;
}
  .bottom-into{
    width: 1200px;
    margin: 0 auto;
  }
  .foot ul.about-ul {
    padding-left: 0px;
  }
  .foot ul {
    width: 173px;
    float: left;
    height: 145px;
    border-right: 1px solid #e2e2e2;
    padding-left: 50px;
    padding-right: 50px;
  }
  .foot ul .foot-liti {
    border-bottom: 1px solid #e3e3e3;
  }
  .foot ul li {
    width: 100%;
  }
  ul, ol {
    list-style: none outside none;
  }
  .foot ul.tu-sao {
    padding-right: 0px;
    border-right: none;
    text-align: right;
  }
  .foot ul.tu-sao {
    width: 376px;
    float: right;
  }
  .foot ul.tu-sao li img {
    margin-left: 82px;
    margin-right: 7px;
    float: left;
    margin-top: 10px;
  }
  .foot ul.tu-sao h3 {
    margin-left: 34px;
  }
  .foot ul h3.weininx {
    /*background: url(../images/icon/foot-4.jpg) no-repeat 0%;*/
  }
  .foot ul h3 {
    color: #666666;
    font-size: 16px;
    padding-left: 30px;
    display: inline-block;
    margin-bottom: 10px;
  }
  .foot ul.about-ul h3 {
    background: url(../image/us-about.png) no-repeat 10%;
  }
  .foot ul.hnge h3 {
    background: url(../image/myats.png) no-repeat 0%;
  }
  .foot ul.pay-links h3 {
    background: url(../image/acmet.png) no-repeat 0%;
  }
  .foot ul h3.weininx {
    background: url(../image/foot-4.jpg) no-repeat 0%;
  }
  .foot ul h3.weibos {
    background: url(../image/foot-5.jpg) no-repeat 0%;
  }
  .foot ul li a {
    display: block;
    background: url(../image/li.jpg) no-repeat 0px 10px;
    line-height: 23px;
    padding-left: 10px;
    color: #666666;
    font-size: 13px;
  }
  a {
    color: #3f5aa7;
    text-decoration: none;
  }

  .fotttter {
    /* margin-top: 106px; */
    margin-top: 0px;
    position: relative;
    min-width: 1200px;
  }
  .footer-big {
    background: #cecece;
  }
  .foot-bottom {
    width: 100%;
    padding-top: 10px;
    background: #cecece;
    height: 56px;
    border-top: 1px solid #b9b9b9;
    text-align: center;
  }
  .into {
    width: 1200px;
    margin: 0 auto;
  }
  .foot-bottom p {
    padding-top: 5px;
    color: #777777;
    margin-top: 8px;
  }
  .shan-icon {
    width: 305px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    padding-bottom: 15px;
  }
  .qued-link a {
    padding-left: 28px;
    padding-right: 28px;
    background: url(../image/px1.jpg) no-repeat 100%;
    color: #777777;
    font-size: 13px;
  }
  a {
    color: #3f5aa7;
    text-decoration: none;
  }
  .foot-bottom p {
    padding-top: 5px;
    color: #777777;
    margin-top: 8px;
    font-size: 13px;
  }

</style>
