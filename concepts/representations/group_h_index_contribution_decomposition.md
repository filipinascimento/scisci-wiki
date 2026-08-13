# Group h-index contribution decomposition

## Summary

Group h-index contribution decomposition represents how individual members' papers contribute to a collective h-index, emphasizing that group h is non-additive.

## Canonical Form

- Unit of analysis: research group, department, institution, member, publication, collective h-core, or contribution count.
- Typical representation: group h-core membership table, member contribution counts, overlap-adjusted h-core shares, or contribution-rank profile.
- Representation target: separate the collective h-index value from the individuals and papers that sustain it.
- Empirical signature: the member contributing most to the group h-core need not be the member with the highest individual h-index.

## Uses in Science of Science

- Extends [group h-index](../measures/group_h_index.md) from a collective scalar to a paper- and member-level decomposition.
- Connects collective impact measures to [collective credit allocation](../measures/collective_credit_allocation.md), [coauthorship networks](coauthorship_networks.md), and team-level evaluation.
- Helps prospective students, administrators, and evaluators avoid reading a group h-index as the simple sum of member h values.
- Supports contribution-aware audits when groups differ in size, overlap, seniority, and collaboration structure.

## Operationalization

- Define the group membership and publication assignment rules.
- Compute the group h-index on the deduplicated union of group publications.
- Identify the group h-core and assign each h-core paper to contributing members under a stated authorship or affiliation rule.
- Report individual contribution counts to the group h-core alongside, but separately from, individual h-index values.

## Evidence and Validations

- Verified full-text evidence from Hirsch (2005) proposes computing h-index values for groups of scientists.
- Hirsch states that a group h-index will generally exceed each member's individual h-index but remain smaller than the sum of individual h-indices.
- In the UC San Diego condensed matter example, the group h-index is far below the sum of member h values, and the largest individual contribution to the group h-core is not the same as the highest individual h-index.
- Hirsch notes that, in principle, a low-h member could contribute the most to a group h-index, motivating contribution decomposition rather than scalar comparison alone.

## Caveats

- Contribution counts depend on group boundaries, historical membership, coauthorship rules, and affiliation timing.
- A group h-core contribution is not the same as intellectual contribution, mentorship, leadership, or labor contribution.
- Large collaborative papers can dominate group h-core counts unless contribution roles or fractionalization are reported.

## Links

- [group h-index](../measures/group_h_index.md)
- [h-index](../measures/h_index.md)
- [h-core publication set](h_core_publication_set.md)
- [collective credit allocation](../measures/collective_credit_allocation.md)
- [coauthorship networks](coauthorship_networks.md)
- [team impact advantage](../mechanisms/team_impact_advantage.md)
- [author contribution statements](../datasets/author_contribution_statements.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Hirsch, J. E. (2005). An index to quantify an individual's scientific research output. *Proceedings of the National Academy of Sciences*, 102(46), 16569-16572. https://doi.org/10.1073/pnas.0507655102 [OpenAlex: W2128438887; Dimensions: pub.1050917859; WoS: unknown]

## Metadata

- Concept ID: `group_h_index_contribution_decomposition`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Hirsch (2005) (2005)
- Latest seen paper: Hirsch (2005) (2005)
- Primary reference DOI: `10.1073/pnas.0507655102`
- OpenAlex ID: `W2128438887`
- Dimensions ID: `pub.1050917859`
- SciSciNet ID: `W2128438887`
- Aliases: group h-core contribution table; collective h-index decomposition; nonadditive group h-index; member contribution to group h
