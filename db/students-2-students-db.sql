PGDMP      '                 }           students-2-students    17.4    17.4     9           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                           false            :           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                           false            ;           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                           false            <           1262    24580    students-2-students    DATABASE     {   CREATE DATABASE "students-2-students" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'en-US';
 %   DROP DATABASE "students-2-students";
                     postgres    false            �            1259    24597    post    TABLE     	  CREATE TABLE public.post (
    post_id integer NOT NULL,
    title character varying(100) NOT NULL,
    pitch text NOT NULL,
    categories text[] NOT NULL,
    created_on timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    post_open boolean DEFAULT true
);
    DROP TABLE public.post;
       public         heap r       postgres    false            �            1259    24596    post_post_id_seq    SEQUENCE     �   CREATE SEQUENCE public.post_post_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.post_post_id_seq;
       public               postgres    false    220            =           0    0    post_post_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.post_post_id_seq OWNED BY public.post.post_id;
          public               postgres    false    219            �            1259    24609    posts    TABLE     y   CREATE TABLE public.posts (
    posts_id integer NOT NULL,
    user_id integer NOT NULL,
    post_id integer NOT NULL
);
    DROP TABLE public.posts;
       public         heap r       postgres    false            �            1259    24608    posts_posts_id_seq    SEQUENCE     �   CREATE SEQUENCE public.posts_posts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.posts_posts_id_seq;
       public               postgres    false    222            >           0    0    posts_posts_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.posts_posts_id_seq OWNED BY public.posts.posts_id;
          public               postgres    false    221            �            1259    24585    users    TABLE     :  CREATE TABLE public.users (
    user_id integer NOT NULL,
    email character varying(100) NOT NULL,
    password text NOT NULL,
    first_name character varying(25) NOT NULL,
    last_name character varying(25) NOT NULL,
    credits integer,
    joined_on timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.users;
       public         heap r       postgres    false            �            1259    24584    users_user_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.users_user_id_seq;
       public               postgres    false    218            ?           0    0    users_user_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.users_user_id_seq OWNED BY public.users.user_id;
          public               postgres    false    217            �           2604    24600    post post_id    DEFAULT     l   ALTER TABLE ONLY public.post ALTER COLUMN post_id SET DEFAULT nextval('public.post_post_id_seq'::regclass);
 ;   ALTER TABLE public.post ALTER COLUMN post_id DROP DEFAULT;
       public               postgres    false    219    220    220            �           2604    24612    posts posts_id    DEFAULT     p   ALTER TABLE ONLY public.posts ALTER COLUMN posts_id SET DEFAULT nextval('public.posts_posts_id_seq'::regclass);
 =   ALTER TABLE public.posts ALTER COLUMN posts_id DROP DEFAULT;
       public               postgres    false    221    222    222            �           2604    24588    users user_id    DEFAULT     n   ALTER TABLE ONLY public.users ALTER COLUMN user_id SET DEFAULT nextval('public.users_user_id_seq'::regclass);
 <   ALTER TABLE public.users ALTER COLUMN user_id DROP DEFAULT;
       public               postgres    false    217    218    218            4          0    24597    post 
   TABLE DATA           X   COPY public.post (post_id, title, pitch, categories, created_on, post_open) FROM stdin;
    public               postgres    false    220   m       6          0    24609    posts 
   TABLE DATA           ;   COPY public.posts (posts_id, user_id, post_id) FROM stdin;
    public               postgres    false    222   �       2          0    24585    users 
   TABLE DATA           d   COPY public.users (user_id, email, password, first_name, last_name, credits, joined_on) FROM stdin;
    public               postgres    false    218   �       @           0    0    post_post_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.post_post_id_seq', 1, false);
          public               postgres    false    219            A           0    0    posts_posts_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.posts_posts_id_seq', 1, false);
          public               postgres    false    221            B           0    0    users_user_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.users_user_id_seq', 1, false);
          public               postgres    false    217            �           2606    24606    post post_pkey 
   CONSTRAINT     Q   ALTER TABLE ONLY public.post
    ADD CONSTRAINT post_pkey PRIMARY KEY (post_id);
 8   ALTER TABLE ONLY public.post DROP CONSTRAINT post_pkey;
       public                 postgres    false    220            �           2606    24614    posts posts_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_pkey PRIMARY KEY (posts_id);
 :   ALTER TABLE ONLY public.posts DROP CONSTRAINT posts_pkey;
       public                 postgres    false    222            �           2606    24595    users users_email_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);
 ?   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key;
       public                 postgres    false    218            �           2606    24593    users users_pkey 
   CONSTRAINT     S   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (user_id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public                 postgres    false    218            �           2606    24620    posts posts_post_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_post_id_fkey FOREIGN KEY (post_id) REFERENCES public.post(post_id) ON DELETE CASCADE;
 B   ALTER TABLE ONLY public.posts DROP CONSTRAINT posts_post_id_fkey;
       public               postgres    false    220    222    4763            �           2606    24615    posts posts_user_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(user_id) ON DELETE CASCADE;
 B   ALTER TABLE ONLY public.posts DROP CONSTRAINT posts_user_id_fkey;
       public               postgres    false    218    222    4761            4      x������ � �      6      x������ � �      2      x������ � �     