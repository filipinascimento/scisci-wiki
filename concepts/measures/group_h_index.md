# Group h-index

## Summary

Group h-index extends the h-index from an individual researcher to a group, department, institution, or other collective publication set.

## Canonical Form

- Unit of analysis: lab, group, department, institution, field, journal, or program.
- Typical representation: h-index computed over the union of publications assigned to the group.
- Mechanism or measurement target: collective breadth of highly cited output.
- Empirical signature: a group has h collective papers with at least h citations each, generally exceeding individual members' h-indices but staying below their sum.

## Uses in Science of Science

- Links author-level [h-index](h_index.md) logic to institutional and group-level evaluation.
- Helps compare departments or programs within a topic area when portfolio boundaries are clearly defined.
- Connects metric design to [faculty hiring networks](../representations/faculty_hiring_networks.md), [institutional prestige hierarchy](../mechanisms/institutional_prestige_hierarchy.md), and responsible evaluation.
- Makes visible how collective impact can differ from the sum of individual metrics.
- Decomposes the collective scalar into member and paper contributions through [group h-index contribution decomposition](../representations/group_h_index_contribution_decomposition.md).

## Operationalization

- Define the collective unit and its publication assignment rule.
- Merge publications across members, deduplicate shared papers, and compute the h-index over the collective publication set.
- Report whether current members, historical members, affiliations-at-publication, or all associated works are included.
- Inspect member contributions to the collective h-core rather than inferring contribution from individual h-index values.

## Evidence and Validations

- Verified full-text evidence from Hirsch (2005) proposes extending the h-index concept to groups of individuals.
- Hirsch states that a group h-index will generally be larger than each member's h-index but smaller than the sum of individual h-indices because overlapping and lower-ranked papers do not all contribute.
- The paper gives the UC San Diego condensed matter group as an example and notes that the largest contributor to a group h-index need not be the person with the highest individual h-index.
- Hirsch frames group h-index rankings as potentially relevant for prospective students and administrators, while the broader paper cautions against overreliance on one number.

## Caveats

- Group boundaries, time windows, affiliation rules, and deduplication choices can dominate the result.
- Group h-index can conflate individual contribution, institutional scale, and field citation density.
- It should be used with [responsible metrics](responsible_metrics.md) guardrails and contribution-aware evidence.

## Links

- [h-index](h_index.md)
- [group h-index contribution decomposition](../representations/group_h_index_contribution_decomposition.md)
- [h-core publication set](../representations/h_core_publication_set.md)
- [m-quotient](m_quotient.md)
- [responsible metrics](responsible_metrics.md)
- [institutional prestige hierarchy](../mechanisms/institutional_prestige_hierarchy.md)
- [faculty hiring networks](../representations/faculty_hiring_networks.md)
- [faculty production inequality](faculty_production_inequality.md)
- [collective credit allocation](collective_credit_allocation.md)
- [author contribution statements](../datasets/author_contribution_statements.md)

## References

- Hirsch, J. E. (2005). An index to quantify an individual's scientific research output. *Proceedings of the National Academy of Sciences*, 102(46), 16569-16572. https://doi.org/10.1073/pnas.0507655102 [OpenAlex: W2128438887; Dimensions: pub.1050917859; WoS: unknown]

## Metadata

- Concept ID: `group_h_index`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Hirsch (2005) (2005)
- Latest seen paper: Hirsch (2005) (2005)
- Primary reference DOI: `10.1073/pnas.0507655102`
- OpenAlex ID: `W2128438887`
- Dimensions ID: `pub.1050917859`
- SciSciNet ID: `W2128438887`
- Aliases: collective h-index; department h-index; institutional h-index; group-level Hirsch index
