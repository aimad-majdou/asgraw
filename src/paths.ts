const PATHS = {
  home() {
    return '/';
  },
  topic: {
    index() {
      return '/topics';
    },
    show(topicSlug: string) {
      return `/topics/${topicSlug}`;
    },
  },
  post: {
    index(topicSlug: string) {
      return `/topics/${topicSlug}/posts`;
    },
    show(topicSlug: string, postId: string) {
      return `/topics/${topicSlug}/posts/${postId}`;
    },
    create(topicSlug: string) {
      return `/topics/${topicSlug}/posts/new`;
    },
  },
};

export default PATHS;
