<template>
  <header class="header">
    <div class="wrap">
      <div class="header-area">
        <h1 class="logo">
          <router-link to="/home">Naver Career</router-link>
        </h1>
        <nav class="gnb">
          <ul>
            <li>
              <a href="#">내 지원서</a>
            </li>
            <li>
              <a href="#">지원문의</a>
            </li>
            <li>
              <a href="#">English</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
  <main class="main">
    <div class="wrap">
      <div class="main-visual">
        <swiper v-bind="swiperOptions">
          <swiper-slide class="swiper_slide">
            <div class="content">
              <img src="http://placeimg.com/980/400/animals" />
              <a href="#" class="link">지원하기</a>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="content">
              <img src="http://placeimg.com/980/400/arch" />
              <a href="#" class="link">NAVER에서 일한다는 것</a>
            </div>
          </swiper-slide>
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </swiper>
      </div>
      <div class="career-menu-area">
        <ul class="career_list">
          <li
            class="career_item"
            v-for="(item, index) in careerList"
            :key="`career-${index}`"
          >
            <router-link :to="item.link">
              <em class="career">{{ item.career }}</em>
              <span class="count">{{ item.count }}</span>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="culture">
        <h2 class="culture_title">Culture Report</h2>
        <div class="culture_content">
          <h3 class="culture_sub-title">제도와 문화</h3>
          <ul class="culutre_list">
            <li
              class="culture_item"
              v-for="(item, index) in cultureList"
              :key="`culture-${index}`"
            >
              <a href="#">
                <h4 class="culture_item-title">{{ item.title }}</h4>
                <p class="culture_desc" v-html="item.desc"></p>
              </a>
            </li>
          </ul>
          <h3 class="culture_sub-title">건강과 가족</h3>
          <ul class="culutre_list">
            <li
              class="culture_item"
              v-for="(item, index) in healthList"
              :key="`health-${index}`"
            >
              <a href="#">
                <h4 class="culture_item-title">{{ item.title }}</h4>
                <p class="culture_desc" v-html="item.desc"></p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </main>
  <AppFooter />
</template>

<script>
import { Swiper } from "swiper/vue/swiper";
import { SwiperSlide } from "swiper/vue/swiper-slide";
import { Navigation, Autoplay } from "swiper";
import "swiper/swiper.scss";
import "swiper/modules/navigation/navigation.min.css";
import AppFooter from "../components/AppFooter.vue";

export default {
  name: "App",
  components: {
    Swiper,
    SwiperSlide,
    AppFooter,
  },
  data() {
    return {
      swiperOptions: {
        modules: [Navigation, Autoplay],
        slidesPerView: "1",
        loop: true,
        autoplay: {
          delay: 4000,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      careerList: [
        {
          career: "개발",
          count: "63",
          link: "/home/recruit",
        },
        {
          career: "설계(디자인)",
          count: "5",
          link: "#",
        },
        {
          career: "콘텐츠&서비스",
          count: "59",
          link: "#",
        },
        {
          career: "경영지원",
          count: "13",
          link: "#",
        },
      ],
      cultureList: [
        {
          title: "일하는 문화",
          desc: "유연한 근무 제도와 호칭 체계, <br>본인 전결화, 평등한 기회",
        },
        {
          title: "조직",
          desc: "일 중심의 유연하고 빠른 조직, <br>Open Career Chance",
        },
        {
          title: "성과와 보상",
          desc: "성과 중심 문화와 다각도 리뷰 기반의 평가, <br>미래가치 공유",
        },
        {
          title: "일하는 문화",
          desc: "유연한 근무 제도와 호칭 체계, <br>본인 전결화, 평등한 기회",
        },
        {
          title: "조직",
          desc: "일 중심의 유연하고 빠른 조직, <br>Open Career Chance",
        },
        {
          title: "성과와 보상",
          desc: "성과 중심 문화와 다각도 리뷰 기반의 평가, <br>미래가치 공유",
        },
      ],
      healthList: [
        {
          title: "건강 케어",
          desc: "아프기 전 미리 예방하고, <br>조기에 진단하는 프로그램",
        },
        {
          title: "가족 케어",
          desc: "직원 가족의 건강까지 케어",
        },
        {
          title: "건강 케어",
          desc: "아프기 전 미리 예방하고, <br>조기에 진단하는 프로그램",
        },
        {
          title: "가족 케어",
          desc: "직원 가족의 건강까지 케어",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 60px;
  background: #fff;
  .header-area {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    .logo a {
      display: block;
      font-size: 24px;
      color: rgb(70, 200, 70);
    }
    .gnb ul {
      display: flex;
      li {
        & + li {
          margin-left: 20px;
        }
        a {
          font-size: 14px;
        }
      }
    }
  }
}
.main {
  width: 100%;
  background: #eee;
  .wrap {
    width: 980px;
    margin: 0 auto;
    padding: 30px 0;
    .main-visual {
      width: 100%;
      height: 400px;
      .content {
        position: relative;
        .link {
          position: absolute;
          top: 320px;
          left: 50%;
          transform: translateX(-50%);
          width: 250px;
          padding: 8px 0;
          border: 1px solid rgba(2555 255 255 / 30%);
          border-radius: 20px;
          text-align: center;
          color: #fff;
          background: rgba(2555 255 255 / 20%);
        }
      }
      .swiper-button-prev {
        left: 30px;
        color: #fff;
      }
      .swiper-button-next {
        right: 30px;
        color: #fff;
      }
    }

    .career-menu-area {
      margin-bottom: 20px;
      .career_list {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border: 1px solid #ddd;

        .career_item {
          flex: 1 1 0;
          &:last-child a {
            border: none;
          }
          a {
            display: flex;
            justify-content: center;
            align-content: center;
            width: 100%;
            padding: 55px 0;
            border-right: 1px solid #ddd;
            text-align: center;
            background: #fff;
            .career {
              margin-right: 10px;
              font-size: 18px;
              font-weight: bold;
            }
            .count {
              padding: 1px 7px;
              border-radius: 12px;
              font-size: 15px;
              color: #fff;
              background: rgb(25, 175, 25);
            }
          }
        }
      }
    }
    .culture {
      .culture_title {
        width: 100%;
        height: 215px;
        text-align: center;
        font-size: 44px;
        line-height: 215px;
        color: #fff;
        background: url("http://placeimg.com/900/215/nature") no-repeat center /
          cover;
      }
      .culture_content {
        padding: 40px;
        margin-bottom: 60px;
        background: #fff;
        .culture_sub-title {
          margin-bottom: 20px;
          font-size: 20px;
        }
        .culutre_list {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          margin-bottom: 30px;
          .culture_item {
            width: 32%;
            height: 170px;
            margin: 0 15px 15px 0;
            border: 3px solid #eee;
            text-align: center;
            &:nth-child(3n) {
              margin: 0 0 15px 0;
            }
            &:hover {
              border: 3px solid #ddd;
            }
            a {
              display: block;
              width: 100%;
              height: 100%;

              padding: 40px 10px;
              .culture_item-title {
                margin-bottom: 20px;
                font-size: 18px;
                color: rgb(25, 175, 25);
              }
              .culture_desc {
                font-size: 14px;
                line-height: 1.5;
                letter-spacing: -0.5px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
