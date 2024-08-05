import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  IconButton,
  Typography,
  styled,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GitHub, Language } from "@mui/icons-material";
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return (
    <IconButton
      {...other}
      sx={{
        color: "black",
        ":hover": { backgroundColor: "white", color: "black" },
      }}
    />
  );
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  backgroundColor: "white",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const ProjectCard = (props) => {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <>
      <div className="m-2">
        <Card className="bg-black text-white w-full border-2 border-brandColor rounded-lg">
          <div className="p-[20px]">
            <h3 className="font-bold">{props.title}</h3>
            <h6 className="text-brandColor font-bold">{props.subtitle}</h6>
          </div>
          <CardMedia
            component="img"
            height="194"
            image={props.image}
            alt="Project Thumb"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {props.miniDescription}
            </Typography>
            <Container className="w-full block">
              <Row>
                {props.previewLink && (
                  <Col md={6} xs={6}>
                    <Link
                      className="w-full flex justify-center bg-brandColor rounded text-black"
                      style={{ textDecoration: "none" }}
                    >
                      <Language />
                      <strong className="px-[10px] no-underline text-reset">
                        Live Preview
                      </strong>
                    </Link>
                  </Col>
                )}
                <Col md={6} xs={6}>
                  <Link
                    className="w-full text-black flex justify-center bg-brandColor rounded"
                    style={{ textDecoration: "none" }}
                  >
                    <GitHub />{" "}
                    <strong className="px-[10px] no-underline text-reset">
                      Github
                    </strong>
                  </Link>
                </Col>
              </Row>
            </Container>
          </CardContent>
          <CardActions disableSpacing>
            {props.iconChips &&
              props.iconChips.map((Icon, index) => (
                <Icon key={index} sx={{ fontSize: 35 }} className="mx-[10px]" />
              ))}
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>{props.description}</Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    </>
  );
};

export default ProjectCard;
