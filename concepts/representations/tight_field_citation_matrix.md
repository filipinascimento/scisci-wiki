# Tight-field citation matrix

## Summary

A tight-field citation matrix arranges all papers in a bounded specialty chronologically and marks citation links from each paper back to earlier papers in the same field.

## Canonical Form

- Unit of analysis: bounded specialty, paper, chronological rank, within-field citation edge, or citation matrix cell.
- Typical representation: triangular paper-by-paper citation matrix with citing papers as columns and cited earlier papers as rows.
- Representation target: make research-front linkage, review papers, classics, and background noise visible in a bounded field.
- Empirical signature: dense citation bands near the diagonal identify recent-front linkage, while vertical and horizontal patterns mark reviews and classics.

## Uses in Science of Science

- Provides a historical small-corpus representation for [citation networks](citation_networks.md) before large graph layouts became routine.
- Operationalizes [research fronts](../mechanisms/research_fronts.md) in a tightly bounded field.
- Helps visualize [research-front citation share](../measures/research_front_citation_share.md), [classic/ephemeral literature split](../mechanisms/classic_ephemeral_literature_split.md), and review-paper replacement.
- Complements modern path-based methods such as [main path analysis](../methods/main_path_analysis.md).

## Operationalization

- Define a tight and closed specialty corpus with near-complete paper coverage.
- Order papers chronologically from the field's beginning to the chosen end point.
- Create a binary matrix where each cell marks a citation from the later paper to an earlier paper.
- Inspect diagonal bands, vertical columns, horizontal rows, and off-diagonal background links.
- Separate [citation-matrix background noise](../validations/citation_matrix_background_noise.md) from research-front, review, and classic structures before interpreting sparse off-band links.
- Compare observed structure with randomized citation matrices preserving paper age or degree.

## Evidence and Validations

- Verified full-text evidence from Price (1965) constructs a matrix for a bounded historical field in which papers are chronologically arranged and dots mark references among papers in the set.
- Price interprets a dense strip near the diagonal as the research front extending back a limited number of recent papers.
- The paper describes vertical lines as review papers and full rows as classic papers, making different citation roles visually distinguishable.
- Price argues that this matrix confirms the idea that roughly part of the literature links tightly to the recent front while the rest scatters through the archive.
- The same matrix motivates [review-paper front reset](../mechanisms/review_paper_front_reset.md), [citation topography strips](citation_topography_strips.md), and [citation-matrix background noise](../validations/citation_matrix_background_noise.md) as more specific motifs.

## Caveats

- The representation requires a well-bounded field; loose or overlapping topics can make the matrix misleading.
- Manual or historical corpus construction can omit important papers and bias the apparent front.
- Dense diagonal structure may reflect citation customs or review practices rather than only intellectual dependency.

## Links

- [citation networks](citation_networks.md)
- [citation-matrix background noise](../validations/citation_matrix_background_noise.md)
- [research fronts](../mechanisms/research_fronts.md)
- [research-front citation share](../measures/research_front_citation_share.md)
- [citation topography strips](citation_topography_strips.md)
- [review-paper front reset](../mechanisms/review_paper_front_reset.md)
- [classic/ephemeral literature split](../mechanisms/classic_ephemeral_literature_split.md)
- [main path analysis](../methods/main_path_analysis.md)
- [citation DAG topological sort](../methods/citation_dag_topological_sort.md)
- [search path link count](../measures/search_path_link_count.md)
- [co-citation](co_citation.md)

## References

- Price, D. J. de Solla. (1965). Networks of scientific papers. *Science*, 149(3683), 510-515. https://doi.org/10.1126/science.149.3683.510 [OpenAlex: W2088209891; Dimensions: pub.1062485810; WoS: unknown]

## Metadata

- Concept ID: `tight_field_citation_matrix`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Price (1965) (1965)
- Latest seen paper: Price (1965) (1965)
- Primary reference DOI: `10.1126/science.149.3683.510`
- OpenAlex ID: `W2088209891`
- Dimensions ID: `pub.1062485810`
- SciSciNet ID: `W2088209891`
- Aliases: chronological citation matrix; bounded-field citation matrix; research-front matrix; within-field citation matrix
