import { Box } from "@mui/material";
import { User } from "../components/user";
import { useProjectState } from "../components/use-project-state";

export default function HomePage() {

  const { visibleUsers, choiceUser, changeUser } = useProjectState();


  return (
    <main>
      <Box maxWidth={428} marginX={"auto"} display={"grid"} gap={1}>
        {visibleUsers.map((user, index) => (
          <Box
            key={index}
            display={"flex"}
            alignItems={"center"}
            gap={1}
            onClick={() => choiceUser(index)}
            sx={{cursor: "pointer"}}
          >
            <Box
              fontWeight={700}
              textAlign={"right"}
              width={62}
              color={changeUser(index) ?? "black"}
            >
              {index + 1}
            </Box>
            <User
              name={user.name}
              color={user.color}
              speed={user.speed}
              time={user.time}
              handleColor={changeUser(index)}
            />
          </Box>
        ))}
      </Box>
    </main>
  );
}
