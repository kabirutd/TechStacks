﻿using System;
using System.Collections.Generic;
using ServiceStack;
using TechStacks.ServiceModel.Types;

namespace TechStacks.ServiceModel
{
    [Route("/organizations/{Slug}", "GET")]
    public class GetOrganizationBySlug : IReturn<GetOrganizationResponse>
    {
        public string Slug { get; set; }
    }

    [Route("/orgs/{Id}", "GET")]
    public class GetOrganization : IReturn<GetOrganizationResponse>
    {
        public int? Id { get; set; }
    }

    public class GetOrganizationResponse
    {
        public long Cache { get; set; }

        public int Id { get; set; }

        public string Slug { get; set; }

        public Organization Organization { get; set; }

        public List<OrganizationLabel> Labels { get; set; }

        public List<Category> Categories { get; set; }

        public List<OrganizationMember> Owners { get; set; }

        public List<OrganizationMember> Moderators { get; set; }

        public long MembersCount { get; set; }

        public ResponseStatus ResponseStatus { get; set; }
    }

    [Route("/orgs/{Id}/admin", "GET")]
    public class GetOrganizationAdmin : IReturn<GetOrganizationAdminResponse>
    {
        public int Id { get; set; }
    }

    public class GetOrganizationAdminResponse
    {
        public List<OrganizationLabel> Labels { get; set; }

        public List<OrganizationMember> Members { get; set; }

        public List<OrganizationMemberInvite> MemberInvites { get; set; }

        public List<PostReportInfo> ReportedPosts { get; set; }

        public List<PostCommentReportInfo> ReportedPostComments { get; set; }

        public ResponseStatus ResponseStatus { get; set; }
    }

    public class PostReportInfo // inheriting non abstract PostReport causes Swift build error 
    {
        public long Id { get; set; }

        public int OrganizationId { get; set; }

        public long PostId { get; set; }

        public int UserId { get; set; }

        public string UserName { get; set; }

        public FlagType FlagType { get; set; }

        public string ReportNotes { get; set; }

        public DateTime Created { get; set; }

        public DateTime? Acknowledged { get; set; }
        public string AcknowledgedBy { get; set; }

        public DateTime? Dismissed { get; set; }
        public string DismissedBy { get; set; }

        public string Title { get; set; }

        public int ReportCount { get; set; }

        public string CreatedBy { get; set; } //Post
    }

    public class PostCommentReportInfo // inheriting non abstract PostCommentReport causes Swift build error 
    {
        public long Id { get; set; }

        public int OrganizationId { get; set; }

        public long PostId { get; set; }

        public long PostCommentId { get; set; }

        public int UserId { get; set; }

        public string UserName { get; set; }

        public FlagType FlagType { get; set; }

        public string ReportNotes { get; set; }

        public DateTime Created { get; set; }

        public DateTime? Acknowledged { get; set; }
        public string AcknowledgedBy { get; set; }

        public DateTime? Dismissed { get; set; }
        public string DismissedBy { get; set; }

        public string ContentHtml { get; set; }

        public int ReportCount { get; set; }

        public string CreatedBy { get; set; } //Post
    }


    [Route("/orgs", "POST")]
    public class CreateOrganization : IReturn<CreateOrganizationResponse>
    {
        public string Name { get; set; }
        public string Slug { get; set; }
        public string Description { get; set; }

        public long? RefId { get; set; }
        public string RefSource { get; set; }
        public string RefUrn { get; set; }
    }

    public class CreateOrganizationResponse
    {
        public int Id { get; set; }
        public string Slug { get; set; }

        public ResponseStatus ResponseStatus { get; set; }
    }

    [Route("/orgs/posts/new", "POST")]
    public class CreateOrganizationForTechnology : IReturn<CreateOrganizationForTechnologyResponse>
    {
        public long? TechnologyId { get; set; }
        public long? TechStackId { get; set; }
    }

    public class CreateOrganizationForTechnologyResponse
    {
        public int OrganizationId { get; set; }
        public string OrganizationSlug { get; set; }
        public long CommentsPostId { get; set; }
        public string CommentsPostSlug { get; set; }

        public ResponseStatus ResponseStatus { get; set; }
    }

    [Route("/orgs/{Id}", "PUT")]
    public class UpdateOrganization : IReturn<UpdateOrganizationResponse>
    {
        public int Id { get; set; }
        public string Slug { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Color { get; set; }
        public string TextColor { get; set; }
        public string LinkColor { get; set; }
        public string BackgroundColor { get; set; }
        public string BackgroundUrl { get; set; }
        public string LogoUrl { get; set; }
        public string HeroUrl { get; set; }
        public string Lang { get; set; }
        public int DeletePostsWithReportCount { get; set; }
        public bool? DisableInvites { get; set; }
        public string DefaultPostType { get; set; }
        public string[] DefaultSubscriptionPostTypes { get; set; }
        public string[] PostTypes { get; set; }
        public string[] ModeratorPostTypes { get; set; }
        public int[] TechnologyIds { get; set; }
    }

    public class UpdateOrganizationResponse
    {
        public ResponseStatus ResponseStatus { get; set; }
    }

    [Route("/orgs/{Id}", "DELETE")]
    public class DeleteOrganization : IReturnVoid
    {
        public int Id { get; set; }
    }

    [Route("/orgs/{Id}/lock", "PUT")]
    public class LockOrganization : IReturnVoid
    {
        public int Id { get; set; }
        public bool Lock { get; set; }
        public string Reason { get; set; }
    }

    [Route("/orgs/{OrganizationId}/categories", "GET")]
    public class GetCategories : IReturn<GetCategoriesResponse>
    {
        public int OrganizationId { get; set; }
    }

    public class GetCategoriesResponse
    {
        public List<Category> Results { get; set; }
    }

    [Route("/orgs/{OrganizationId}/categories", "POST")]
    public class AddOrganizationCategory : IReturn<AddOrganizationCategoryResponse>
    {
        public int OrganizationId { get; set; }
        public string Slug { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int[] TechnologyIds { get; set; }
    }

    public class AddOrganizationCategoryResponse
    {
        public int Id { get; set; }
        public string Slug { get; set; }

        public ResponseStatus ResponseStatus { get; set; }
    }

    [Route("/orgs/{OrganizationId}/categories/{Id}", "PUT")]
    public class UpdateOrganizationCategory : IReturn<UpdateOrganizationCategoryResponse>
    {
        public int OrganizationId { get; set; }
        public int Id { get; set; }
        public string Name { get; set; }
        public string Slug { get; set; }
        public string Description { get; set; }
        public int[] TechnologyIds { get; set; }
    }

    public class UpdateOrganizationCategoryResponse
    {
        public ResponseStatus ResponseStatus { get; set; }
    }

    [Route("/orgs/{OrganizationId}/categories/{Id}", "DELETE")]
    public class DeleteOrganizationCategory : IReturnVoid
    {
        public int OrganizationId { get; set; }
        public int Id { get; set; }
    }

    [Route("/orgs/{Id}/members", "GET")]
    public class GetOrganizationMembers : IReturn<GetOrganizationMembersResponse>
    {
        public int Id { get; set; }
    }

    public class GetOrganizationMembersResponse
    {
        public int OrganizationId { get; set; }

        public List<OrganizationMember> Results { get; set; }

        public ResponseStatus ResponseStatus { get; set; }
    }


    [Route("/orgs/{OrganizationId}/labels", "POST")]
    public class AddOrganizationLabel : IReturn<OrganizationLabelResponse>
    {
        public int OrganizationId { get; set; }
        public string Slug { get; set; }
        public string Description { get; set; }
        public string Color { get; set; }
    }

    [Route("/orgs/{OrganizationId}/members/{Slug}", "PUT")]
    public class UpdateOrganizationLabel : IReturn<OrganizationLabelResponse>
    {
        public int OrganizationId { get; set; }
        public string Slug { get; set; }
        public string Description { get; set; }
        public string Color { get; set; }
    }

    [Route("/orgs/{OrganizationId}/labels/{Slug}", "DELETE")]
    public class RemoveOrganizationLabel : IReturnVoid
    {
        public int OrganizationId { get; set; }
        public string Slug { get; set; }
    }

    public class OrganizationLabelResponse
    {
        public ResponseStatus ResponseStatus { get; set; }
    }

    [Route("/orgs/{OrganizationId}/members", "POST")]
    public class AddOrganizationMember : IReturn<AddOrganizationMemberResponse>
    {
        public int OrganizationId { get; set; }
        public string UserName { get; set; }
        public bool IsOwner { get; set; }
        public bool IsModerator { get; set; }
        public bool DenyPosts { get; set; }
        public bool DenyComments { get; set; }
        public bool DenyAll { get; set; }
        public string Notes { get; set; }
    }

    public class AddOrganizationMemberResponse
    {
        public ResponseStatus ResponseStatus { get; set; }
    }

    [Route("/orgs/{OrganizationId}/members/{Id}", "PUT")]
    public class UpdateOrganizationMember : IReturn<UpdateOrganizationMemberResponse>
    {
        public int OrganizationId { get; set; }
        public int UserId { get; set; }
        public bool IsOwner { get; set; }
        public bool IsModerator { get; set; }
        public bool DenyPosts { get; set; }
        public bool DenyComments { get; set; }
        public bool DenyAll { get; set; }
        public string Notes { get; set; }
    }

    public class UpdateOrganizationMemberResponse
    {
        public ResponseStatus ResponseStatus { get; set; }
    }

    [Route("/orgs/{OrganizationId}/members/{UserId}", "DELETE")]
    public class RemoveOrganizationMember : IReturnVoid
    {
        public int OrganizationId { get; set; }
        public int UserId { get; set; }
    }

    [Route("/orgs/{OrganizationId}/invites", "GET")]
    public class GetOrganizationMemberInvites : IReturn<GetOrganizationMemberInvitesResponse>
    {
        public int OrganizationId { get; set; }
    }

    public class GetOrganizationMemberInvitesResponse
    {
        public List<OrganizationMemberInvite> Results { get; set; }

        public ResponseStatus ResponseStatus { get; set; }
    }

    [Route("/orgs/{OrganizationId}/invites", "POST")]
    public class RequestOrganizationMemberInvite : IReturn<RequestOrganizationMemberInviteResponse>
    {
        public int OrganizationId { get; set; }
    }

    public class RequestOrganizationMemberInviteResponse
    {
        public int OrganizationId { get; set; }

        public ResponseStatus ResponseStatus { get; set; }
    }

    [Route("/orgs/{OrganizationId}/invites/{UserId}", "PUT")]
    public class UpdateOrganizationMemberInvite : IReturn<UpdateOrganizationMemberInviteResponse>
    {
        public int OrganizationId { get; set; }
        public string UserName { get; set; }
        public bool Approve { get; set; }
        public bool Dismiss { get; set; }
    }

    public class UpdateOrganizationMemberInviteResponse
    {
        public ResponseStatus ResponseStatus { get; set; }
    }

    [Route("/orgs/{OrganizationId}/members/set", "POST")]
    public class SetOrganizationMembers : IReturn<SetOrganizationMembersResponse>
    {
        public int OrganizationId { get; set; }
        public string[] GithubUserNames { get; set; }
        public string[] TwitterUserNames { get; set; }
        public string[] Emails { get; set; }
        
        public bool RemoveUnspecifiedMembers { get; set; }
        
        public bool IsOwner { get; set; }
        public bool IsModerator { get; set; }
        public bool DenyPosts { get; set; }
        public bool DenyComments { get; set; }
        public bool DenyAll { get; set; }
    }

    public class SetOrganizationMembersResponse
    {
        public int[] UserIdsAdded { get; set; }
        public int[] UserIdsRemoved { get; set; }
        public ResponseStatus ResponseStatus { get; set; }
    }
}