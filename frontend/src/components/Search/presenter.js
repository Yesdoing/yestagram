import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import Loading from 'common/Loading';
import UserDisplay from 'components/UserDisplay';
import PhotoDisplay from 'components/PhotoDisplay';

const Search = (props, context) => (
    <div className={styles.search}>
        <section className={styles.column}>
            <h4 className={styles.title}>{context.t('Users')}</h4>
            { props.loading && <SearchLoading />}
            { !props.loading && 
              props.userList.length < 1 && (
              <NotFound text={context.t(`Nothing found :(`)} />
            )}
            {
                !props.loading && 
                props.userList.length > 0 && (
                <RenderUserSearch userList={props.userList} />
            )}
        </section>
        <section className={styles.column}>
            <h4 className={styles.title}>{context.t('Photos')}</h4>
            { props.loading && <SearchLoading />}
            { !props.loading && props.imageList.length < 1 && (
                <NotFound text={context.t("Nothing found :(")} />
            )}
            {
                !props.loading && 
                props.imageList.length > 0 && (
                <RenderImageList imageList={props.imageList} />
            )}
        </section>
    </div>
)

const SearchLoading = props => (
    <div className={styles.search}>
        <Loading />
    </div>
)

const NotFound = props => <span className={styles.notFound}>{props.text}</span>

const RenderUserSearch = props => (
    <div className={styles.content}>
        {
            props.userList.map(user => (
                <UserDisplay vertical={true} user={user} key={user.id} />
            ))   
        }
    </div>
);

const RenderImageList = props => (
    <div className={styles.content}>
        {
            props.imageList.map(image => (
                <PhotoDisplay {...image} key={image.id} />
            ))
        }
    </div>
);

Search.contextTypes = {
    t: PropTypes.func.isRequired,
}

Search.propTypes = {
    loading: PropTypes.bool.isRequired
}

export default Search;