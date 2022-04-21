import { useRouter } from 'next/router';
interface ILink {
  children: React.ReactNode;
  href: string;
}
function ActiveLink({ children, href }: ILink) {
  const router = useRouter();
  const link = router.asPath === href;
  const style = {
    // marginRight: 5,
    color: link ? 'var(--main-bn-color)' : 'black',
  };

  const handleClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a href={href} onClick={handleClick} style={style}>
      {children}
    </a>
  );
}

export default ActiveLink;
