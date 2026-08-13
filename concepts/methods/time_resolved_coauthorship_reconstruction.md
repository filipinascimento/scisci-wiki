# Time-resolved coauthorship reconstruction

## Summary

Time-resolved coauthorship reconstruction uses publication or submission dates to order when collaboration ties enter a coauthorship network, enabling dynamic analysis of collaboration formation.

## Canonical Form

- Unit of analysis: author pair, paper, coauthorship edge, publication date, source-domain panel, or temporal graph snapshot.
- Typical representation: dated edge additions, cumulative coauthorship graphs, sliding-window collaboration networks, or tie-formation event histories.
- Method target: convert static coauthorship data into dynamic networks where collaboration growth and closure can be tested.
- Empirical signature: the order of edge additions is observable from paper dates, making coauthorship networks unusually time-resolved among social networks.

## Uses in Science of Science

- Provides temporal input for [triadic closure in collaboration](../mechanisms/triadic_closure_in_collaboration.md) and [preferential attachment](../mechanisms/preferential_attachment.md) tests.
- Supplies the dated edge sequence required for [coauthorship preferential-attachment test](coauthorship_preferential_attachment_test.md).
- Extends [coauthorship networks](../representations/coauthorship_networks.md) from static maps to dynamic collaboration histories.
- Supports [collaboration assortativity](../measures/collaboration_assortativity.md), [collaboration clustering coefficient](../measures/collaboration_clustering_coefficient.md), and [scientific brokerage centrality](../measures/scientific_brokerage_centrality.md) as time-windowed measures.
- Uses [coauthorship source-domain panels](../datasets/coauthorship_source_domain_panels.md) when source-specific publication dates are reliable.

## Operationalization

- Extract publication or submission dates for papers in a source-domain panel.
- Create or update coauthorship edges when a paper appears, optionally weighting each new edge by team size.
- Maintain cumulative or rolling snapshots to measure network growth, closure, centrality, and tie persistence.
- Restrict tie-formation tests to pairs that have not previously collaborated when estimating new-collaboration probabilities.
- Record dating granularity and possible delays between collaboration, submission, and publication.

## Evidence and Validations

- Verified full-text evidence from Newman (2004) states that coauthorship networks are unusual among social networks because their time evolution is well documented.
- Newman explains that publication or submission dates let researchers approximate when each connection was added and reconstruct the order in which the network grew.
- The paper uses this temporal property to ask whether previously unconnected scientists become more likely to coauthor when they share mutual collaborators.
- Newman reports that scientists with one mutual collaborator are much more likely to later coauthor than scientists with none, and pairs with two mutual collaborators are even more likely, illustrating the value of temporal reconstruction for mechanism tests.

## Caveats

- Publication date is an approximate tie date; collaboration often begins earlier.
- Source coverage, author disambiguation, and missing publication dates can distort edge timing.
- Large-team papers can add many edges simultaneously and should be handled explicitly.
- Temporal reconstruction does not by itself establish causality without controls for field, institution, productivity, career age, and source coverage.

## Links

- [coauthorship networks](../representations/coauthorship_networks.md)
- [coauthorship source-domain panels](../datasets/coauthorship_source_domain_panels.md)
- [triadic closure in collaboration](../mechanisms/triadic_closure_in_collaboration.md)
- [coauthorship preferential-attachment test](coauthorship_preferential_attachment_test.md)
- [weighted coauthorship edges](../representations/weighted_coauthorship_edges.md)
- [collaboration strength distribution](../measures/collaboration_strength_distribution.md)
- [collaboration assortativity](../measures/collaboration_assortativity.md)
- [collaboration clustering coefficient](../measures/collaboration_clustering_coefficient.md)
- [preferential attachment](../mechanisms/preferential_attachment.md)

## References

- Newman, M. E. J. (2004). Coauthorship networks and patterns of scientific collaboration. *Proceedings of the National Academy of Sciences*, 101(suppl. 1), 5200-5205. https://doi.org/10.1073/pnas.0307545100 [OpenAlex: W2097777089; Dimensions: pub.1049986679; WoS: unknown]

## Metadata

- Concept ID: `time_resolved_coauthorship_reconstruction`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Newman (2004) (2004)
- Latest seen paper: Newman (2004) (2004)
- Primary reference DOI: `10.1073/pnas.0307545100`
- OpenAlex ID: `W2097777089`
- Dimensions ID: `pub.1049986679`
- SciSciNet ID: `W2097777089`
- Aliases: dated coauthorship reconstruction; temporal collaboration graph; coauthorship edge timing; collaboration network growth reconstruction
