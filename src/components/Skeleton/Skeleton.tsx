import {
    Field,
    Skeleton,
    SkeletonItem,
    makeStyles,
    tokens,
  } from "@fluentui/react-components";
  import type { SkeletonProps } from "@fluentui/react-components";
  
  const useStyles = makeStyles({
    invertedWrapper: {
      backgroundColor: tokens.colorNeutralBackground1,
      paddingTop: "50px",
      paddingBottom: "50px",
    },
  });
  
  export const SkeletonEl = (props: Partial<SkeletonProps>) => {
    const styles = useStyles();
    return (
      <div className={styles.invertedWrapper}>
        <Field validationMessage="Loading Table" validationState="none">
          <Skeleton {...props}>
            <SkeletonItem />
          </Skeleton>
        </Field>

        <Field validationMessage="Thank You for your patience" validationState="none">
          <Skeleton {...props}>
            <SkeletonItem />
          </Skeleton>
        </Field>

        <Field validationMessage="More Features coming soon" validationState="none">
          <Skeleton {...props}>
            <SkeletonItem />
          </Skeleton>
        </Field>
      </div>
    );
  };