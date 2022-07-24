import { Box, SimpleGrid, Text, Button, Heading } from "@chakra-ui/react";
import { Image } from "@chakra-ui/image";
import { headerStyle } from "./LandingPageStyle";
import { CategoryCard } from "./CategoryCard/CategoryCard";

export const LandingPage = () => {
  const categories: Array<categoryOfQuizType> = [
    {
      image:
        "https://res.cloudinary.com/radheshyam11/image/upload/v1658672340/Html-image_czyavf.png",
      name: "Html quiz",
    },
    {
      image:
        "https://res.cloudinary.com/radheshyam11/image/upload/v1658672345/css-image_fpg8zs.png",
      name: "Css quiz",
    },
    {
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAh1BMVEU8eQr///8ucgCuwqa0x6ozdQA6eAA2dgCXsoogbAAscQAbagAlbgAnbwA1dQD5+/fw9O2ovp6Gpnfg6NvN2sZUhjq6zLLm7OKQrYKBo3FJfyqatI5oklNvl1rE071EfR3a49Sku5lfjEhRhDV4nGZFfiBbikNrlFbS3s3H1cJ0mmF7nmtijkwose8pAAAHHklEQVR4nO2caXeqOhSGIZrEQCjOEyp1ar0e///vu1DPbUF3IGEw9K79fHWZlZdMe0ocB0EQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBCmC8TdKUijnzHZnQDgF4Fp/ZdQTZLZZRaNeb7RfXm9rT3idk8mv0eCJaFsukVE/Hs8XoZslnMxXZ592SiSZuwB9UvI3Lnk0gf6ZMNknv76k81qQPtTJXrFCLg7/KOTdmR66o7GCQhbMLoX6Ui7H4GUaijFXyD3wL0+MOjKMxgq9j6GWQNddHOkLhSgxVSjGmvpStt4rpSgwVChGBgJdd9yBxWimUOgtwR+W9iUaKQwiQ4Gueyo7WVvHRCH9YyzQdT9s76gGCllcQaA7JJZtOAOF/nsVhe5FvFxUDn2F1OScyDK2eyzqK/R0T/on7M5TbYV0WVWgu7N6ZGgrlIvKCqdWTwxdhXxbVV948m0I+0ZXoQd6yl8K5qtDHB+3y10I/bwjlu1vXYVStc8MvIBzxhinkiyfNA6vwnZIQ1MhP8L6huuM+8CIt8v/PA/sO1CaCukAFBjGeZuM+fus/I20PYCOtkI4YOWenoZI/Ejs+bZN0i80FQrQYpsAu6T4O1EXH/Ydpy80FfrgaTgAVhm72z570YkBdPQVgpN0A6mg12RwZ12IX9yppTAGNxIxjTozgE4rCh1p/4jIUEuhdf9dh1oK//yfFIJG27wjB0IhugrBRFNoOwajg6bCAM7F9KWVThuha5cqYt2r7s9TXYWqMNTKciStHE2F6lhpv0unO0RtD9gdbrvhQ6ioH8Vw3fdbl8dROxL1qVboupfPbllqWfSjicUB4clYdvRw1FZIyjJrw9G6k5NVWyGjYLAwx+XUsWqhFP28RekgpoQR8Tqm0SC7JvRSM/046JRGA4X8pqUwcTnOXdJokuUOtAsx5s6vi9PcEeXVXt8tiK4ckEYKWaCfYgvHHTk7zOppGDHIIk5mnXCtDGuiGDVJlI6sJ54c87o2ZrAWk2GM7a9G49pElsm9aHCyHueoUEEbbEyqMiLbQYAqVdC8yFl8Yv5rKoYyMLkx2HDmv6NS4QEul/pTtW91FCsqdBwqo3J36i9LmzZcZYWJRn+gO44Hi+ZNDYWJRrFSXSvJM7ToNNZSmI7jYa4zWXv25mlNhcmeE7wtNQZybW0QaytMbVXxsYNayWKvPrEBhU56eDi9EomOrUFsRmFaZOLtCxfkyFYJZlMK06a8ohNyaMuyaVBh4h/Tgrlqq6yhSYVpmOOoNFj3llzFZhUme46v8jsuljzFphU6jq+YqeH/RqHjK+Iclg79FhSyN1jhzc5W04JCJ1CU2/4ShRqvEShuLkDVqM2h7BYcclEq5OJPuCvbMhgHFbZp1TCxUnkvHnixXtWZ4JjuIteywfBA26be1C+ExBd3rGhegp5PBGqg8n4QlF4pDF6rkPlfd7IUtj1cgABdqGP+6b+OT0tsTPLSWUrW91GCLzoyB+wM8PKHt84cc/vC6Bn/ABuFJ0ZduPjOvoMBL74CO/NkJdOH7GjhHW0CWzWrNk6LYJZZZpBxL6dQX8KHKc3E6XEyj9UbKpOwE9XCic/93IcPnwNeioK8YX4SemfADouUa1FlezdvtQXHhw+/eLqG5IND6E6zA8Rzd5l+2CkK9gR8RcoNm458c/m8GhZOfrELRYlMdtfjW1XYN9wCeWwuVE7wtFnfgkkwBRZefzrFqPKRi+xWWlTP9r6VJCsyafJT6QE3bLRxpR+6EZJQSjxBx8rO5CbpVa0wmRWjmyeCpMGkRSmOg4LIabPLELan7wx3vSgazd/VUaP8fCp7aCCc7Pr7tMVpYRYDuudWA5WLpkf+4GLrOm1907RnQczekckRPnxtz/xFE4DGg4klBa9FPF+vNCm/ULBv3CilhRtEIU830pijnQtVAVgbtZEm1QRZ+s/2K5/VVbhqwepmQbV5GkJVvqT6jPhi2komn58rdQb+2l6V54W+aesVHqpb8Zplp/jaHuxm6XFsK8pGTsZ9WSire71NZYGb9oJsnqnER8cwC11XfL9l02bmkNyM9vlwXTSduCjNZUNtztrNOdHY4MMv1GHVO+JqfDBeSNuRbuZrP5O3K6+wp5rvXn6z9F+QjpE3rWEMxzoFvSw4F7/Nmv9m8WuS91yOyw///pvmcmFyrWkt7Wave7yFSrW3e9cXG9iNzCPlNULDXhy8NNf05s96qoG8jH1Tm4P6zrLA4Rj2b8ZN1ocT/7jcPb5OfeldSaXLkYxKcRvsJg+baxi+91dnv/UNVNmrQNCPzSraj9IXxreHs5B1+sKpJ+T68Dn+anAUrbaHWAhi+81y/veVeNrQK/GMp6+6f7X41tV35xEEQRAEQRAEQZBu8y+66V4nZIX97wAAAABJRU5ErkJggg==",
      name: "JS quiz",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgVF1dospej2VMDF0sb-TuNCYudETDT6UKVQ&usqp=CAU",
      name: "React quiz",
    },
  ];

  return (
    <>
      <SimpleGrid columns={[1, 2]} mb="4rem" px="1.5rem">
        <Box textAlign="center" pt="4rem" fontSize="xx-large">
          <Text
            fontSize="xx-large"
            mt="0.5rem"
            fontWeight="500"
            color="primary.700"
          >
            Front-Quiz
          </Text>
          <Text fontSize="x-large">
            Want to check or enhance your knoweldge ?
          </Text>
          <Text fontSize="x-large">Practice these quizzes</Text>
          <Button variant="solidPrimary">Explore quizzes</Button>
        </Box>
        <Box>
          <Image
            src="https://res.cloudinary.com/radheshyam11/image/upload/v1658670974/quizImage_yiilq4.png"
            alt="promo"
            maxH={530}
            width="90%"
          />
        </Box>
      </SimpleGrid>

      <Heading {...headerStyle}>CATEGORIES TO PRACTICE</Heading>
      <SimpleGrid
        columns={[2, 2, 4]}
        mt="3rem"
        mb="2rem"
        px={4}
        gridGap={["2rem", "2rem", "2rem"]}
      >
        {categories.map(
          (category): JSX.Element => (
            <CategoryCard category={category} />
          )
        )}
      </SimpleGrid>
    </>
  );
};

export type categoryOfQuizType = {
  image: string;
  name: string;
};
