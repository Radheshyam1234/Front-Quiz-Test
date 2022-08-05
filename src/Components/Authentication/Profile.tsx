import React, { useState, useEffect } from "react";
import { Avatar, Button, Box, Heading, SimpleGrid } from "@chakra-ui/react";

import { useAuthProvider } from "../../Context/AuthenticationContext/AuthProvider";

export const Profile = () => {
  const { getUserProfile, token, logoutUser, userDetails } = useAuthProvider();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!userDetails && token) {
      (async () => {
        setLoading(true);
        try {
          await getUserProfile();
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      })();
    }
  }, [token, userDetails]);

  return (
    <>
      <Heading textAlign="center" mb="2.5rem">
        Your Profile
      </Heading>
      {loading && "Loading"}
      {userDetails && (
        <SimpleGrid margin="0 auto 2rem" justifyContent="center" gap="2rem">
          <Box textAlign="right">
            <Avatar
              size="2xl"
              name={`${userDetails.firstName} ${userDetails.lastName}`}
              src="https://bit.ly/tioluwani-kolawole"
            />
          </Box>
          <Box textAlign="left" mt="2rem">
            <Box display="flex">
              <Box fontWeight="500" pr="0.5rem">
                Name:
              </Box>
              <Box>
                {userDetails.firstName} {userDetails.lastName}
              </Box>
            </Box>
            <Box display="flex">
              <Box fontWeight="500" pr="0.5rem">
                Email:
              </Box>
              <Box>{userDetails.email}</Box>
            </Box>
            <Button
              mt="1rem"
              variant="outlinePrimary"
              onClick={() => logoutUser()}
            >
              Log out
            </Button>
          </Box>
        </SimpleGrid>
      )}
    </>
  );
};
