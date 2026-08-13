# h-index total-citation scaling

## Summary

h-index total-citation scaling relates an author's h-index to total citation count through an approximate proportionality between total citations and `h^2`.

## Canonical Form

- Unit of analysis: author, group, field, or other publication portfolio with an h-index and total citation count.
- Typical representation: `Nc,total = a h^2`, where `a` summarizes the shape of the citation distribution around the h-core.
- Measurement target: translate a threshold-based author indicator into an approximate total-citation scale.
- Empirical signature: portfolios with similar h can have different total citations when their highly cited tail or low-cited mass differs.

## Uses in Science of Science

- Connects [h-index](h_index.md) to broader [citation impact indicators](citation_impact_indicators.md) and [citation distribution scaling](citation_distribution_scaling.md).
- Helps interpret whether a high h-index is accompanied by a broad body of moderately cited work or a few extremely cited papers.
- Uses [h-index citation-curve intersection](../representations/h_index_citation_curve_intersection.md) as the geometric representation where total citations are the area under the ranked citation curve.
- Supports diagnostics for [h-index tail insensitivity](../validations/h_index_tail_insensitivity.md), because the same h can hide different values of `a`.
- Provides a compact input for comparing author portfolios before more detailed field, coauthorship, and self-citation adjustments.

## Operationalization

- Compute h-index from an author-disambiguated citation record at a stated census date.
- Compute total citations over the same publication set and citation snapshot.
- Estimate `a = Nc,total / h^2`.
- Compare `a` within fields, career stages, and database sources; inspect extreme values for review articles, large-team papers, or tail-dominated citation profiles.

## Evidence and Validations

- Verified full-text evidence from Hirsch (2005) defines a proportionality constant `a` in the relation between total citations and `h^2`.
- Hirsch reports empirical values of `a` typically ranging from about 3 to 5 among the physicists he inspected.
- The paper uses the relation to argue that h gives a ballpark estimate of total citations while remaining less dominated by the most highly cited papers than raw total citations.

## Caveats

- The scaling is descriptive, not a universal law; `a` depends on field, citation window, team size, document type, and tail shape.
- Similar `a` values do not make h-index fair across fields or career ages.
- Total citation counts and h-index values must be calculated from the same database and author-disambiguation rules.

## Links

- [h-index](h_index.md)
- [h-index citation-curve intersection](../representations/h_index_citation_curve_intersection.md)
- [h-core publication set](../representations/h_core_publication_set.md)
- [h-index tail insensitivity](../validations/h_index_tail_insensitivity.md)
- [m-quotient](m_quotient.md)
- [field-normalized h-index](field_normalized_h_index.md)
- [citation distribution scaling](citation_distribution_scaling.md)
- [citation impact indicators](citation_impact_indicators.md)

## References

- Hirsch, J. E. (2005). An index to quantify an individual's scientific research output. *Proceedings of the National Academy of Sciences*, 102(46), 16569-16572. https://doi.org/10.1073/pnas.0507655102 [OpenAlex: W2128438887; Dimensions: pub.1050917859; WoS: unknown]

## Metadata

- Concept ID: `h_index_total_citation_scaling`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Hirsch (2005) (2005)
- Latest seen paper: Hirsch (2005) (2005)
- Primary reference DOI: `10.1073/pnas.0507655102`
- OpenAlex ID: `W2128438887`
- Dimensions ID: `pub.1050917859`
- SciSciNet ID: `W2128438887`
- Aliases: h squared citation scaling; Hirsch a parameter; total citations h squared relation; h-index citation-scale factor
