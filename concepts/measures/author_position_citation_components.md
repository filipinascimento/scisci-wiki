# Author-position citation components

## Summary

Author-position citation components count citations to papers where the focal scientist holds specific authorship roles, such as single author, first author, or last author.

## Canonical Form

- Unit of analysis: author, paper, authorship position, citation edge, or author citation portfolio.
- Typical representation: citations to single-author papers, citations to single-or-first-author papers, and citations to single/first/last-author papers.
- Measurement target: author-level impact credited to visible lead or senior authorship roles rather than all coauthored citations equally.
- Empirical signature: authors with similar total citations can differ sharply in citation counts attached to single, first, or last author positions.

## Uses in Science of Science

- Supplies role-sensitive components for [author citation composite indicator](author_citation_composite_indicator.md).
- Connects citation evaluation to [collective credit allocation](collective_credit_allocation.md), [lead-role ratio](lead_role_ratio.md), and [author contribution statements](../datasets/author_contribution_statements.md).
- Helps [responsible metrics](responsible_metrics.md) users inspect whether author-level impact is driven by all coauthorships or by leadership-position papers.
- Complements [contribution role vectors](../representations/contribution_role_vectors.md) when explicit contributor roles are available.
- Provides a citation-based proxy when full author contribution statements are unavailable.

## Operationalization

- Parse author position for each paper in an author portfolio.
- Define role sets, such as single-author only, single-or-first author, and single/first/last author.
- Count citations to papers in each role set, optionally excluding self-citations.
- Report these components alongside total citations and h-index rather than using them as a standalone quality score.
- Interpret position rules by field because first and last authorship conventions vary.

## Evidence and Validations

- Verified full-text evidence from Ioannidis et al. (2019) uses citations to single-author papers, citations to single-or-first-author papers, and citations to single/first/last-author papers as three of six components in its composite author indicator.
- The other components are total citations, h-index, and coauthorship-adjusted hm-index, making role-sensitive citation counts part of a broader author impact profile.
- Ioannidis et al. publish the component values directly, allowing users to inspect whether the composite is driven by total coauthored impact or author-position-sensitive impact.
- The paper also provides all components with and without self-citations, which matters because self-citation opportunities differ across author roles and team sizes.

## Caveats

- Author-order conventions vary across fields, alphabetic-order disciplines, and collaboration sizes.
- Last authorship is not always a senior-author signal.
- Role-position citation components remain proxies and should not replace explicit contribution statements when available.
- Large collaborations can make first/last/single rules especially brittle.

## Links

- [author citation composite indicator](author_citation_composite_indicator.md)
- [standardized author citation database](../datasets/standardized_author_citation_database.md)
- [self-citation-excluded author metrics](self_citation_excluded_author_metrics.md)
- [collective credit allocation](collective_credit_allocation.md)
- [lead-role ratio](lead_role_ratio.md)
- [author contribution statements](../datasets/author_contribution_statements.md)
- [contribution role vectors](../representations/contribution_role_vectors.md)
- [coauthorship networks](../representations/coauthorship_networks.md)
- [responsible metrics](responsible_metrics.md)

## References

- Ioannidis, J. P. A., Baas, J., Klavans, R., & Boyack, K. W. (2019). A standardized citation metrics author database annotated for scientific field. *PLOS Biology*, 17(8), e3000384. https://doi.org/10.1371/journal.pbio.3000384 [OpenAlex: W2968900048; Dimensions: pub.1120285279; WoS: unknown]

## Metadata

- Concept ID: `author_position_citation_components`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Ioannidis et al. (2019) (2019)
- Latest seen paper: Ioannidis et al. (2019) (2019)
- Primary reference DOI: `10.1371/journal.pbio.3000384`
- OpenAlex ID: `W2968900048`
- Dimensions ID: `pub.1120285279`
- SciSciNet ID: `W2968900048`
- Aliases: authorship-position citation counts; first-author citation component; single-author citation component; first-last-author citation component
