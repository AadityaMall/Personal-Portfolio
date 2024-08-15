import React from "react";
import {
  Card,
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
          <div className="p-4">
            <h4 className="font-bold text-3xl overflow-hidden text-ellipsis whitespace-nowrap">
              {props.title}
            </h4>
            <h6 className="text-brandColor font-bold">{props.subtitle}</h6>
          </div>
          <div>
            <img
              src={`${props.image}`}
              alt="project pic"
              className="img-fluid z-100 aspect-video object-contain"
              loading="lazy"
            />
          </div>
          <CardContent>
            <Typography variant="body2" className="my-[10px] mb-3">
              <div className="overflow-hidden text-ellipsis whitespace-nowrap">
                <span
                  dangerouslySetInnerHTML={{ __html: props.description }}
                ></span>
              </div>
            </Typography>
            <Container className="w-full block">
              <Row>
                {props.previewLink && (
                  <Col md={6} xs={6} className="mb-2 mb-md-0">
                    <Link
                      className="flex items-center justify-center w-full bg-brandColor rounded text-black"
                      style={{ textDecoration: "none" }}
                      to={props.previewLink}
                    >
                      <Language />
                      <strong className="px-2 overflow-hidden text-ellipsis whitespace-nowrap">
                        Live Preview
                      </strong>
                    </Link>
                  </Col>
                )}
                <Col md={6} xs={6}>
                  <Link
                    className="flex items-center justify-center w-full bg-brandColor rounded text-black"
                    style={{ textDecoration: "none" }}
                    to={props.githubLink}
                  >
                    <GitHub />
                    <strong className="px-2 overflow-hidden text-ellipsis whitespace-nowrap">
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
                <Icon key={index} sx={{ fontSize: 35 }} className="mx-2" />
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
              <div>
                <span
                  dangerouslySetInnerHTML={{ __html: props.description }}
                ></span>
                <ul className="marker:text-brandColor list-disc text-left my-[10px]">
                  {props.bulletPoints && props.bulletPoints.map((point,index)=>(
                    <li dangerouslySetInnerHTML={{ __html: point }}></li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    </>
  );
};

export default ProjectCard;
