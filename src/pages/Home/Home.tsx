import './Home.scss'
import {
    makeStyles,
    Body1,
    Caption1,
    Button,
    shorthands,
  } from "@fluentui/react-components";

import {
    Card,
    CardFooter,
    CardHeader,
    CardPreview,
  } from "@fluentui/react-components";

const useStyles = makeStyles({
    card: {
      ...shorthands.margin("auto"),
      width: "720px",
      maxWidth: "100%",
    },
  });

function Home(props:any) {

    const { list } = props;
    return(
        <section>
            <div className='home'>

            </div>
            <h1>
                Layoff Detector System
            </h1>

            {list.map((e:any) => {
                return(
                    <Card>
                    <CardHeader
                      header={
                        <Body1>
                          <b>Elvia Atkins</b> mentioned you
                        </Body1>
                      }
                      description={<Caption1>5h ago · About us - Overview</Caption1>}
                    />
                  </Card>
                )
            }
                
            )}
        </section>
    )
}

export default Home;