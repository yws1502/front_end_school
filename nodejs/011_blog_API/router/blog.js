const express = require("express");
let blogs = require("../database/dataBlog");

const router = express.Router();

// url에 최신 게시물 3개 응답
// /blog - 블로그 글 리스트 모두 응답
// /blog?section=it -> it 관련된 들 모두 응답 - 블로그 글 리스트 모두 응답
router.get("/", (req, res, next) => {
  console.log(req.query);
  const section = req.query.section;

  const data = section ? blogs.filter(blog => blog.section === section) : blogs;

  res.status(200).json(data);
});

router.get("/:id", (req, res, next) => {
  console.log(req.params);
  const id = req.params.id;

  const data = blogs.find(blog => blog.id === +id);

  res.status(200).json(data);
});

router.post("/", (req, res, next) => {
  console.log(req.body);
  const id = blogs.length + 1;
  const title = req.body.title;
  const content = req.body.content;
  const section = req.body.section;
  const viewCount = 0;
  const pubDate = new Date().toString();
  const modDate = new Date().toString();
  const blog = { id, title, content, section, viewCount, pubDate, modDate };

  // DB 연결해서 수정해야되는 코드는 이거 하!나!
  blogs.push(blog);

  res.status(201).json(blogs); // 
//   {
//     "title": "title4",
//     "content": "content4",
//     "section": "section4"
// }
});

router.put("/:id", (req, res, next) => {
  // user 인증 코드 삽입
  const id = req.params.id;
  const data = blogs.find(blog => blog.id === +id);
  if (data) {
    data.title = req.body.title;
    data.content = req.body.content;
    data.section = req.body.section;
    data.modDate = new Date().toString();
    res.status(200).json(blogs);
  } else {
    res.status(404);
  }
});

router.delete("/:id", (req, res, next) => {
  // user 인증 코드 삽입
  const id = req.params.id;
  
  blogs = blogs.filter(blog => blog.id !== +id);

  res.status(200).json(blogs)
});

module.exports = router;
