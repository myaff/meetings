<template>
  <div class="page page--users">
    <div
      v-if="users.length"
      class="users"
      :class="{ 'detail-opened': !!userDetailId }"
    >
      <div class="users__list-area">
        <div v-bar>
          <div class="vb-content">
            <div class="users__list-content">
              <flip-list :list="users">
                <template v-slot:item="{ item }">
                  <user-card :user="item" @click="toggleUserDetail(item.id)" />
                </template>
              </flip-list>
            </div>
          </div>
        </div>
      </div>
      <transition name="slide" appear>
        <div v-if="userDetailId" class="users__detail-area">
          <div v-bar>
            <div class="vb-content">
              <div class="users__detail-content">
                <user-detail
                  :id="userDetailId"
                  :key="userDetailId"
                  @close="closeUserDetail"
                  @deleted="closeUserDetail"
                />
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
    <empty-page v-else>
      <template #title>
        <h2>Sorry, there are no users found!</h2>
      </template>
      <p>Press big blue button to add</p>
    </empty-page>
    <base-button
      shape="circle"
      size="big"
      class="users__action-btn"
      @click="addUser"
    >
      <svg-icon name="add" />
    </base-button>
    <user-add :active.sync="addingUser" />
  </div>
</template>
<script>
import { EmptyPage, FlipList } from "~/components/layout";
import { UserAdd, UserCard, UserDetail } from "~/components/users";
export default {
  name: "Users",
  components: {
    EmptyPage,
    FlipList,
    UserAdd,
    UserCard,
    UserDetail
  },
  computed: {
    users() {
      return this.$store.state.users.list;
    }
  },

  data() {
    return {
      addingUser: false,
      userDetailId: null
    };
  },

  methods: {
    addUser() {
      this.addingUser = true;
    },
    closeUserDetail() {
      setTimeout(() => {
        this.userDetailId = null;
      });
    },
    toggleUserDetail(id) {
      if (this.userDetailId === id) {
        this.userDetailId = null;
      } else {
        this.userDetailId = id;
      }
    }
  }
};
</script>

<style src="~/assets/stylus/pages/users.styl" lang="stylus"></style>
