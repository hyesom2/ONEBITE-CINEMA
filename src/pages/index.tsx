import SearchableLayout from '@/components/SearchableLayout';
import { ReactNode } from 'react';

export default function Home() {
  return (
    <h1>ONEBITE CINEMA Home</h1>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{ page }</SearchableLayout>
}
