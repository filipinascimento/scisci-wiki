# Collaboration-clustering residual mechanism gap

## Summary

Collaboration-clustering residual mechanism gap is the validation problem of separating coauthorship clustering caused mechanically by multi-author papers from residual clustering caused by social or organizational closure.

## Canonical Form

- Unit of analysis: coauthorship triangle, clustering coefficient, paper team, field network, or closure mechanism.
- Typical representation: projection-induced triangle share, residual clustering, or time-resolved closure test.
- Validation target: avoid treating all high clustering as evidence of social triadic closure.
- Empirical signature: only part of observed clustering is explained by papers with three or more authors; the remainder requires additional mechanisms.

## Uses in Science of Science

- Qualifies [large-team triangle inflation](large_team_triangle_inflation.md).
- Refines [collaboration clustering coefficient](../measures/collaboration_clustering_coefficient.md).
- Connects to [shared-context collaboration clustering](../mechanisms/shared_context_collaboration_clustering.md).
- Supports stronger tests of [triadic closure in collaboration](../mechanisms/triadic_closure_in_collaboration.md).

## Operationalization

- Compute clustering in the projected coauthorship graph.
- Estimate the share generated mechanically by multi-author papers.
- Use time-resolved data to test whether two scientists with mutual collaborators form new ties more often.
- Report residual clustering and candidate mechanisms separately.

## Evidence and Validations

- Verified full-text evidence from Newman (2004) defines clustering as the probability that two coauthors are also coauthors of one another.
- The paper notes that papers with three or more coauthors create triangles and can explain part, but not all, of clustering.
- It reports time-resolved evidence that scientists sharing mutual collaborators are much more likely to collaborate later, after removing prior collaboration bias.

## Caveats

- Projection effects grow with team size and can differ sharply by field.
- Residual clustering can reflect institutions, topics, funding programs, or measurement artifacts.
- Time-resolved closure tests require reliable publication dates and author identities.

## Links

- [large-team triangle inflation](large_team_triangle_inflation.md)
- [collaboration clustering coefficient](../measures/collaboration_clustering_coefficient.md)
- [shared-context collaboration clustering](../mechanisms/shared_context_collaboration_clustering.md)
- [triadic closure in collaboration](../mechanisms/triadic_closure_in_collaboration.md)
- [coauthorship networks](../representations/coauthorship_networks.md)

## References

- Newman, M. E. J. (2004). Coauthorship networks and patterns of scientific collaboration. *Proceedings of the National Academy of Sciences*, 101(suppl. 1), 5200-5205. https://doi.org/10.1073/pnas.0307545100 [OpenAlex: W2097777089; Dimensions: pub.1049986679; SciSciNet: W2097777089; WoS: unknown]

## Metadata

- Concept ID: `collaboration_clustering_residual_mechanism_gap`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Newman (2004) (2004)
- Latest seen paper: Newman (2004) (2004)
- Primary reference DOI: `10.1073/pnas.0307545100`
- OpenAlex ID: `W2097777089`
- Dimensions ID: `pub.1049986679`
- SciSciNet ID: `W2097777089`
- Aliases: residual coauthorship clustering; projection-adjusted clustering caveat; collaboration closure mechanism gap
