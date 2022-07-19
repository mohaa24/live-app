// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  let count = 0;
  setInterval(() => {
    count++;
  }, 1000);

  res.status(200).json({'count':count})
}
