import { useRouter } from 'next/router'

export default function Movie() {
  const router = useRouter();
  const { id } = router.query; // const id = router.query.id 와 같음

  return (
    <h1>영화 상세 페이지 : {id}</h1>
  )
}