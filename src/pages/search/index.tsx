import SearchableLayout from '@/components/SearchableLayout';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';

export default function Search() {
  const router = useRouter();
  const q = router.query.q;
  // 또는 구조분해할당 문법 사용
  // const {q} = router.query;

  return (
    <h1>검색 결과 : {q}</h1>
  )
}

Search.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>
}