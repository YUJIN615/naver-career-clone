<template>
  <header class="header">
    <div class="row">
      <div class="wrap">
        <div class="header-area">
          <h1 class="logo">
            <router-link to="/home">Naver Career</router-link>
          </h1>
          <a href="#" class="lang">English</a>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="wrap">
        <div class="header-area">
          <nav class="nav-career">
            <ul class="career_list">
              <li class="career_item active">
                <a href="#">개발</a>
              </li>
              <li class="career_item">
                <a href="#">설계(디자인)</a>
              </li>
              <li class="career_item">
                <a href="#">콘텐츠&서비스</a>
              </li>
              <li class="career_item">
                <a href="#">경영지원</a>
              </li>
            </ul>
          </nav>
          <nav class="nav-apply">
            <ul class="apply_list">
              <li class="apply_item">
                <a href="#">내 지원서</a>
              </li>
              <li class="apply_item">
                <a href="#">지원문의</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
  <main class="main">
    <div class="wrap">
      <div class="intro-area">
        <div class="story-area">
          <ul class="story_list">
            <li class="story_item active">
              <a href="#">모집소식</a>
            </li>
            <li class="story_item">
              <a href="#">개발자 이야기</a>
            </li>
          </ul>
        </div>
        <div class="notice-area">
          <span class="flag">공지</span>
          <div class="notice-wrap">
            <swiper v-bind="swiperOptions">
              <swiper-slide
                class="swiper_slide"
                v-for="(item, index) in notice"
                :key="`notice-${index}`"
              >
                <div class="notice_item">
                  <a href="#">{{ item }}</a>
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
      <div class="career-sort-area">
        <div class="tab-area">
          <ul class="tab-career">
            <li
              :class="['tab_item', { active: this.activeTabIndex === index }]"
              v-for="(menu, index) in tabMenus"
              :key="`menu-${index}`"
            >
              <a href="#" @click="selctTab(index)">{{ menu }}</a>
            </li>
          </ul>
        </div>
        <div class="search-area">
          <select name="corp" id="">
            <option value="전체">전체</option>
            <option value="NAVER">NAVER</option>
            <option value="LABS">LABS</option>
          </select>
          <input type="text" placeholder="search jobs" class="search" />
        </div>
      </div>
      <div class="career-area">
        <div class="tag-area">
          <span class="title">바로가기 태그</span>
          <div class="tag-wrap">
            <span class="tag"><a href="#">#java</a></span>
            <span class="tag"><a href="#">#Linux</a></span>
            <span class="tag"><a href="#">#Android</a></span>
          </div>
        </div>
        <div class="career-list-area" v-if="this.activeTabIndex === 0">
          <ul class="career-list">
            <li class="career-item" v-for="item in all" :key="item">
              <div class="content-wrap">
                <div class="left-area">
                  <strong class="title">
                    {{ item.title }}
                  </strong>
                  <div class="tag-wrap">
                    <span
                      class="tag"
                      v-for="(tag, index) in item.tag"
                      :key="`tag-${index}`"
                    >
                      <a href="#">#{{ tag }}</a>
                    </span>
                  </div>
                </div>
                <div class="right-area">
                  <div class="date">{{ item.date }}</div>
                  <div class="corp">{{ item.corp }}</div>
                </div>
              </div>
            </li>
          </ul>
          <button type="button" class="show-more-btn">10개 더보기</button>
        </div>
        <div class="career-list-area" v-if="this.activeTabIndex === 1">
          <ul class="career-list">
            <li class="career-item" v-for="item in newcomer" :key="item">
              <div class="content-wrap">
                <div class="left-area">
                  <strong class="title">
                    {{ item.title }}
                  </strong>
                  <div class="tag-wrap">
                    <span
                      class="tag"
                      v-for="(tag, index) in item.tag"
                      :key="`tag-${index}`"
                    >
                      <a href="#">#{{ tag }}</a>
                    </span>
                  </div>
                </div>
                <div class="right-area">
                  <div class="date">{{ item.date }}</div>
                  <div class="corp">{{ item.corp }}</div>
                </div>
              </div>
            </li>
          </ul>
          <button type="button" class="show-more-btn">10개 더보기</button>
        </div>
        <div class="career-list-area" v-if="this.activeTabIndex === 2">
          <ul class="career-list">
            <li class="career-item" v-for="item in experienced" :key="item">
              <div class="content-wrap">
                <div class="left-area">
                  <strong class="title">
                    {{ item.title }}
                  </strong>
                  <div class="tag-wrap">
                    <span
                      class="tag"
                      v-for="(tag, index) in item.tag"
                      :key="`tag-${index}`"
                    >
                      <a href="#">#{{ tag }}</a>
                    </span>
                  </div>
                </div>
                <div class="right-area">
                  <div class="date">{{ item.date }}</div>
                  <div class="corp">{{ item.corp }}</div>
                </div>
              </div>
            </li>
          </ul>
          <button type="button" class="show-more-btn">10개 더보기</button>
        </div>
        <div class="career-list-area" v-if="this.activeTabIndex === 3">
          <ul class="career-list">
            <li class="career-item" v-for="item in intern" :key="item">
              <div class="content-wrap">
                <div class="left-area">
                  <strong class="title">
                    {{ item.title }}
                  </strong>
                  <div class="tag-wrap">
                    <span
                      class="tag"
                      v-for="(tag, index) in item.tag"
                      :key="`tag-${index}`"
                    >
                      <a href="#">#{{ tag }}</a>
                    </span>
                  </div>
                </div>
                <div class="right-area">
                  <div class="date">{{ item.date }}</div>
                  <div class="corp">{{ item.corp }}</div>
                </div>
              </div>
            </li>
          </ul>
          <button type="button" class="show-more-btn">10개 더보기</button>
        </div>
      </div>
    </div>
  </main>
  <AppFooter />
</template>

<script>
import { Swiper } from "swiper/vue/swiper.js";
import { SwiperSlide } from "swiper/vue/swiper-slide.js";
import { Autoplay } from "swiper";
import "swiper/swiper.scss";
import "swiper/modules/navigation/navigation.min.css";
import AppFooter from "../components/AppFooter.vue";

export default {
  naem: "Recruit",
  components: {
    Swiper,
    SwiperSlide,
    AppFooter,
  },
  data() {
    return {
      swiperOptions: {
        modules: [Autoplay],
        direction: "vertical",
        height: 20,
        slidesPerView: "1",
        loop: true,
        autoplay: {
          delay: 2000,
        },
      },
      notice: [
        "입사지원서 작성 관련하여 안내드립니다.",
        "NAVER(주)의 채용서류 반환 절차에 대해 안내",
        "채용관련 보이스피싱 등 금융사고 주의 안내",
      ],
      tabMenus: ["전체", "신입", "경력", "인턴"],
      activeTabIndex: 0,
      all: [
        {
          title: "[Platform Engineering] Cloud Native DevOps Engineer",
          tag: ["경력", "Cloud", "Software Development"],
          date: "2022.03.01~2022.03.28",
          corp: "NAVER LABS",
        },
        {
          title: "[Platform Engineering] Front-end Engineer",
          tag: ["경력", "Cloud", "Software Development"],
          date: "2022.03.01~2022.03.28",
          corp: "NAVER LABS",
        },
        {
          title: "[Platform Engineering] Server Engineer",
          tag: ["경력", "Cloud", "Software Development"],
          date: "2022.03.01~2022.03.28",
          corp: "NAVER LABS",
        },
        {
          title: "[AR] Machine Learning Engineer",
          tag: ["경력", "Cloud", "Software Development"],
          date: "2022.03.01~2022.03.28",
          corp: "NAVER LABS",
        },
        {
          title: "[AR] Graphics Engineer",
          tag: ["경력", "Cloud", "Software Development"],
          date: "2022.03.01~2022.03.28",
          corp: "NAVER LABS",
        },
        {
          title: "[경력] 글로벌 콘텐츠 서비스 서버 개발자",
          tag: ["경력", "Cloud", "Software Development"],
          date: "2022.03.01~2022.03.28",
          corp: "NAVER LABS",
        },
        {
          title: "[NAVER Cloud] 빅데이터 분석 플랫폼 엔지니어",
          tag: ["경력", "Cloud", "Software Development"],
          date: "2022.03.01~2022.03.28",
          corp: "NAVER LABS",
        },
      ],
      newcomer: [
        {
          title: "[Platform Engineering] Front-end Engineer",
          tag: ["경력", "Cloud", "Software Development"],
          date: "2022.03.01~2022.03.28",
          corp: "NAVER LABS",
        },
        {
          title: "[AR] Graphics Engineer",
          tag: ["경력", "Cloud", "Software Development"],
          date: "2022.03.01~2022.03.28",
          corp: "NAVER LABS",
        },
      ],
      experienced: [
        {
          title: "[Platform Engineering] Server Engineer",
          tag: ["경력", "Cloud", "Software Development"],
          date: "2022.03.01~2022.03.28",
          corp: "NAVER LABS",
        },
        {
          title: "[경력] 글로벌 콘텐츠 서비스 서버 개발자",
          tag: ["경력", "Cloud", "Software Development"],
          date: "2022.03.01~2022.03.28",
          corp: "NAVER LABS",
        },
      ],
      intern: [
        {
          title: "[NAVER Cloud] 빅데이터 분석 플랫폼 엔지니어",
          tag: ["경력", "Cloud", "Software Development"],
          date: "2022.03.01~2022.03.28",
          corp: "NAVER LABS",
        },
      ],
    };
  },
  methods: {
    selctTab(index) {
      this.activeTabIndex = index;
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  background: #fff;
  .row {
    height: 60px;
    border-bottom: 1px solid #eee;
    &:nth-child(2) {
      height: 50px;
    }
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
      .lang {
        font-size: 14px;
      }
      .nav-career {
        height: 100%;
        .career_list {
          display: flex;
          align-items: center;
          height: 100%;
          .career_item {
            padding-right: 50px;
            height: 100%;
            &.active a {
              padding: 0 5px;
              border-bottom: rgb(70, 200, 70) 3px solid;
            }
            a {
              display: block;
              height: 100%;
              line-height: 50px;
              font-size: 15px;
              font-weight: bold;
            }
          }
        }
      }
      .nav-apply {
        .apply_list {
          display: flex;
          align-items: center;
          .apply_item {
            padding-left: 30px;
            a {
              font-size: 14px;
            }
          }
        }
      }
    }
  }
}
.main {
  width: 100%;
  padding-bottom: 100px;
  background: #eee;
  .intro-area {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 40px 0 30px;
    .story-area {
      .story_list {
        display: flex;
        .story_item {
          &.active a {
            color: #000;
            font-weight: bold;
          }
          a {
            height: 100%;
            padding: 0 20px;
            font-size: 20px;
            color: #aaa;
          }
        }
      }
    }
    .notice-area {
      display: flex;
      align-items: flex-start;

      .flag {
        height: 20px;
        padding: 0 4px;
        margin-right: 8px;
        border: rgb(70, 200, 70) 1px solid;
        border-radius: 3px;
        font-size: 12px;
        color: rgb(70, 200, 70);
      }
      .notice-wrap {
        position: relative;
        width: 250px;
        height: 20px;
        overflow: hidden;

        .notice_item {
          height: 20px;
          a {
            display: block;
            width: 250px;
            font-size: 13px;
            line-height: 20px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            color: #666;
          }
        }
      }
    }
  }
  .career-sort-area {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 70px;
    margin-bottom: 20px;
    padding: 0 40px;
    background: #fff;
    .tab-area {
      height: 100%;
      .tab-career {
        display: flex;
        align-items: center;
        height: 100%;
        .tab_item {
          height: 100%;
          padding-right: 20px;
          &.active a {
            color: #000;
            font-weight: bold;
            border-bottom: 3px solid #000;
          }
          a {
            display: block;
            height: 100%;
            padding: 0 5px;
            font-size: 16px;
            line-height: 70px;
            color: #999;
          }
        }
      }
    }
    .search-area {
      display: flex;
      select {
        width: 150px;
        height: 35px;
        margin-right: 10px;
        padding: 5px;
        border: 1px solid #ccc;
        font-size: 13px;
        color: #bbb;
      }
      .search {
        width: 180px;
        height: 35px;
        border: 1px solid #ccc;
        padding: 0 10px;
      }
    }
  }
  .career-area {
    width: 100%;
    background: #fff;
    .tag-area {
      display: flex;
      align-items: center;
      height: 60px;
      padding: 0 40px;
      border-bottom: 1px solid #ddd;
      .title {
        margin-right: 10px;
        font-size: 15px;
        color: #666;
      }
      .tag-wrap {
        .tag {
          a {
            display: inline-block;
            margin-right: 10px;
            padding: 0 3px;
            font-size: 14px;
            color: #666;
            line-height: 20px;
            background: #f5f5f5;
          }
        }
      }
    }
    .career-list-area {
      padding: 0 40px 40px;

      .career-list {
        .career-item {
          padding: 35px 0;
          + .career-item {
            border-top: 1px solid #ddd;
          }
          .content-wrap {
            display: flex;
            justify-content: space-between;
            align-content: center;
            .left-area {
              .title {
                display: block;
                margin-bottom: 10px;
                font-size: 20px;
                font-weight: normal;
              }
              .tag-wrap {
                .tag {
                  a {
                    display: inline-block;
                    margin-right: 10px;
                    padding: 0 3px;
                    font-size: 14px;
                    line-height: 20px;
                    color: #666;
                    background: #f5f5f5;
                  }
                }
              }
            }
            .right-area {
              text-align: right;
              .date {
                margin-bottom: 10px;
                font-size: 18px;
              }
              .corp {
                font-size: 18px;
                font-weight: bold;
              }
            }
          }
        }
      }
      .show-more-btn {
        width: 100%;
        height: 60px;
        margin-top: 30px;
        border: 1px solid #ddd;
        font-size: 20px;
        background: transparent;
        cursor: pointer;
      }
    }
  }
}
</style>
