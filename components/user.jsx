import { Box } from "@mui/material";
import { HelmetIcon } from "./helmet-icon";

export function User({ name, color, speed, time, handleColor }) {
  return (
    <Box
      display={"flex"}
      gap={1}
      alignItems={"center"}
      overflow={"hidden"}
      maxWidth={350}
      width={"100%"}
    >
      <Box height={66} minWidth={66} border={2} borderColor={handleColor || 'transparent'} borderRadius={'50%'} display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <HelmetIcon color={color} />
      </Box>
      <Box overflow={"hidden"}>
        <Box
          mb={0.5}
          fontWeight={600}
          textOverflow={"ellipsis"}
          whiteSpace={"nowrap"}
          overflow={"hidden"}
        >
          {name}
        </Box>
        <div>
          <span>{time}</span> | {speed} км/ч
        </div>
      </Box>
    </Box>
  );
}

