export default {
  url: "https://tirea.learnnavi.org/api",
};

export const api = {
  search_url: "http://tirea.learnnavi.org/api/fwew/{nav}",
  search_reverse_url: "http://tirea.learnnavi.org/api/fwew/r/{lang}/{local}",
  search_url_1d_array: "http://tirea.learnnavi.org/api/fwew-1d/{nav}",
  search_reverse_url_1d_array:
    "http://tirea.learnnavi.org/api/fwew-1d/r/{lang}/{local}",
  search_complete: "http://tirea.learnnavi.org/api/search/{lang}/{words}}",
  simple_search_url: "http://tirea.learnnavi.org/api/fwew-simple/{nav}",
  list_url: "http://tirea.learnnavi.org/api/list",
  list_filter_url: "http://tirea.learnnavi.org/api/list/{args}",
  random_url: "http://tirea.learnnavi.org/api/random/{n}",
  random_filter_url: "http://tirea.learnnavi.org/api/random/{n}/{args}",
  number_to_navi_url: "http://tirea.learnnavi.org/api/number/r/{num}",
  navi_to_number_url: "http://tirea.learnnavi.org/api/number/{word}",
  lenition_url: "http://tirea.learnnavi.org/api/lenition",
  version_url: "http://tirea.learnnavi.org/api/version",
  name_single_url:
    "http://tirea.learnnavi.org/api/name/single/{n}/{s}/{dialect}",
  name_full_url:
    "http://tirea.learnnavi.org/api/name/full/{ending}/{n}/{s1}/{s2}/{s3}/{dialect}",
  name_alu_url:
    "http://tirea.learnnavi.org/api/name/alu/{n}/{s}/{nm}/{am}/{dialect}",
};
