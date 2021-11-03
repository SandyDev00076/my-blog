/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateBlogInput = {
  id?: string | null,
  title: string,
  summary?: string | null,
  content?: string | null,
  timestamp?: string | null,
  likes?: number | null,
};

export type ModelBlogConditionInput = {
  title?: ModelStringInput | null,
  summary?: ModelStringInput | null,
  content?: ModelStringInput | null,
  timestamp?: ModelStringInput | null,
  likes?: ModelIntInput | null,
  and?: Array< ModelBlogConditionInput | null > | null,
  or?: Array< ModelBlogConditionInput | null > | null,
  not?: ModelBlogConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Blog = {
  __typename: "Blog",
  id: string,
  title: string,
  summary?: string | null,
  content?: string | null,
  timestamp?: string | null,
  likes?: number | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateBlogInput = {
  id: string,
  title?: string | null,
  summary?: string | null,
  content?: string | null,
  timestamp?: string | null,
  likes?: number | null,
};

export type DeleteBlogInput = {
  id: string,
};

export type ModelBlogFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  summary?: ModelStringInput | null,
  content?: ModelStringInput | null,
  timestamp?: ModelStringInput | null,
  likes?: ModelIntInput | null,
  and?: Array< ModelBlogFilterInput | null > | null,
  or?: Array< ModelBlogFilterInput | null > | null,
  not?: ModelBlogFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelBlogConnection = {
  __typename: "ModelBlogConnection",
  items?:  Array<Blog | null > | null,
  nextToken?: string | null,
};

export type CreateBlogMutationVariables = {
  input: CreateBlogInput,
  condition?: ModelBlogConditionInput | null,
};

export type CreateBlogMutation = {
  createBlog?:  {
    __typename: "Blog",
    id: string,
    title: string,
    summary?: string | null,
    content?: string | null,
    timestamp?: string | null,
    likes?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBlogMutationVariables = {
  input: UpdateBlogInput,
  condition?: ModelBlogConditionInput | null,
};

export type UpdateBlogMutation = {
  updateBlog?:  {
    __typename: "Blog",
    id: string,
    title: string,
    summary?: string | null,
    content?: string | null,
    timestamp?: string | null,
    likes?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBlogMutationVariables = {
  input: DeleteBlogInput,
  condition?: ModelBlogConditionInput | null,
};

export type DeleteBlogMutation = {
  deleteBlog?:  {
    __typename: "Blog",
    id: string,
    title: string,
    summary?: string | null,
    content?: string | null,
    timestamp?: string | null,
    likes?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetBlogQueryVariables = {
  id: string,
};

export type GetBlogQuery = {
  getBlog?:  {
    __typename: "Blog",
    id: string,
    title: string,
    summary?: string | null,
    content?: string | null,
    timestamp?: string | null,
    likes?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBlogsQueryVariables = {
  filter?: ModelBlogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBlogsQuery = {
  listBlogs?:  {
    __typename: "ModelBlogConnection",
    items?:  Array< {
      __typename: "Blog",
      id: string,
      title: string,
      summary?: string | null,
      content?: string | null,
      timestamp?: string | null,
      likes?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateBlogSubscription = {
  onCreateBlog?:  {
    __typename: "Blog",
    id: string,
    title: string,
    summary?: string | null,
    content?: string | null,
    timestamp?: string | null,
    likes?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBlogSubscription = {
  onUpdateBlog?:  {
    __typename: "Blog",
    id: string,
    title: string,
    summary?: string | null,
    content?: string | null,
    timestamp?: string | null,
    likes?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBlogSubscription = {
  onDeleteBlog?:  {
    __typename: "Blog",
    id: string,
    title: string,
    summary?: string | null,
    content?: string | null,
    timestamp?: string | null,
    likes?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
