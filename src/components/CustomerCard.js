import * as React from "react";
import { styled } from "@mui/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  // transition: theme.transitions.create("transform", {
  //   duration: theme.transitions.duration.shortest,
  // }),
}));

export default function RecipeReviewCard({
  text,
  imagePath = `data:image/jpeg;base64,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`,
}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "#f39422" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image={imagePath}
        alt="Paella dish"
      />
      <CardContent>
        <Typography
          className="text-3xl font-extrabold italic text-primary"
          // variant="body2"
          // color="text.secondary"
        >
          {text || "gahagagaaggaggaagag"}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
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
          <Typography paragraph>Review:</Typography>
          <Typography paragraph>
            You've become quite the go-to person with our customers. You have no
            problem building rapport with everyone you come in contact work.
            This is a great customer service skill to possess. You're really
            good at obtaining first-hand customer information and using this
            information to improve our products and services.
          </Typography>
          <Typography paragraph>
            Building a positive brand reputation is important for every
            business. Customers used to transfer information through word of
            mouth. Reviews are the digital-age equivalent of this. Reviews let
            your prospective customers know the quality of your service, which
            helps you gain new customers. In particular, review response rates
            in Google search lift your SEO ranking, which leads to more eyeballs
            and higher customer conversion rates over time.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
