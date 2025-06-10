import Products from "./Products/ProductsView";
import Catagorie from "./Catagorie";
import Breadcrumb from "../components/Breadcrumb";

function Home() {
  // const getData = async () => {
  //   const result = await serviceGetCategorie();
  //   return result;
  // };
  // const [useName, setName] = useState<string>("");
  // const [useAge, setAge] = useState<string>("");

  // const { data, isLoading, isFetching, isError, refetch } = useQuery({
  //   queryKey: ["getCategorieData"],
  //   queryFn: async () => {
  //     const result = await serviceGetCategorie();
  //     return result;
  //   },
  //   refetchOnWindowFocus: false, // call api อีกครั้งเมื่อมีการ focus tab ที่เปิดอยู่
  //   enabled: useName === "a" && useAge === "25", // true : call api เมื่อ component mount / false : ไม่ call api
  //   retry: 1, // จำนวนครั้งที่ retry call api
  //   staleTime: 1000 * 60 * 5, // เวลาที่ข้อมูลจะถูก cache (5 นาที)
  // });

  // console.log("data", data); // ข้อมูลที่ได้จาก api
  // console.log("isLoading", isLoading);
  // console.log("isFetching", isFetching);

  // refetch();

  // function checkA(a: string) {
  //   if (a === "a") {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  // const breadcrumbItems = [{ label: "Home", link: "/" }];

  return (
    <>
      {/* <div className="flex justify-center items-center mt-5">
        <Breadcrumb items={breadcrumbItems} />
      </div> */}

      <Catagorie />
      <Products />
    </>
  );
}

export default Home;
