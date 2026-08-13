# Collaboration strength distribution

## Summary

Collaboration strength distribution measures how strongly author pairs are connected after repeated and team-size-discounted coauthorships are aggregated across a network.

## Canonical Form

- Unit of analysis: author pair, weighted coauthorship edge, field, source-domain panel, or time window.
- Typical representation: distribution of summed collaboration-strength weights over all author pairs.
- Measurement target: heterogeneity in tie strength, distinguishing weak one-off or large-team ties from repeated close collaborations.
- Empirical signature: edge weights vary substantially, with a small number of very strong collaboration ties and many weak ties.

## Uses in Science of Science

- Summarizes the weighted edge layer defined by [weighted coauthorship edges](../representations/weighted_coauthorship_edges.md).
- Complements [collaborator-count distribution](collaborator_count_distribution.md), because high degree and high tie strength are different collaboration patterns.
- Provides weighted inputs for [scientific brokerage centrality](scientific_brokerage_centrality.md), [collaboration clustering coefficient](collaboration_clustering_coefficient.md), and [collaboration assortativity](collaboration_assortativity.md).
- Helps compare fields with different team-size norms in [coauthorship source-domain panels](../datasets/coauthorship_source_domain_panels.md).

## Operationalization

- Build author-disambiguated coauthorship edges over a fixed source-domain panel and time window.
- For each paper with `n` authors, add a discounted contribution such as `1 / (n - 1)` to every author pair on that paper.
- Sum contributions over all papers for each author pair.
- Analyze the distribution, upper tail, field differences, and sensitivity to large-team handling.
- Report whether weights are cumulative, time-windowed, normalized, or thresholded.

## Evidence and Validations

- Verified full-text evidence from Newman (2004) argues that simple counts of coauthored papers do not account for the number of other coauthors on each paper.
- Newman defines collaboration strength by adding `1 / (n - 1)` to an author pair's tie for a paper with `n` total authors, based on the idea that an author's collaboration time is divided among the other coauthors.
- The paper gives an example where three coauthored papers with four, two, and three authors add weights of one-third, one, and one-half, for a total tie weight of eleven-sixths.
- Newman reports substantial variation in collaboration strength in the physics network, with connection strengths ranging from a large maximum to very small weights.

## Caveats

- Collaboration strength is a proxy for repeated and close coauthorship, not direct communication or labor.
- The `1 / (n - 1)` rule is interpretable but not unique; other weighting rules can change the distribution.
- Large-team papers, consortium authorship, and author-disambiguation errors can dominate the weak-tie mass.
- Tie strength should be interpreted with contribution statements or domain knowledge where possible.

## Links

- [weighted coauthorship edges](../representations/weighted_coauthorship_edges.md)
- [coauthorship networks](../representations/coauthorship_networks.md)
- [coauthorship source-domain panels](../datasets/coauthorship_source_domain_panels.md)
- [time-resolved coauthorship reconstruction](../methods/time_resolved_coauthorship_reconstruction.md)
- [collaborator-count distribution](collaborator_count_distribution.md)
- [scientific brokerage centrality](scientific_brokerage_centrality.md)
- [collaboration clustering coefficient](collaboration_clustering_coefficient.md)
- [repeat incumbent collaboration fraction](repeat_incumbent_collaboration_fraction.md)

## References

- Newman, M. E. J. (2004). Coauthorship networks and patterns of scientific collaboration. *Proceedings of the National Academy of Sciences*, 101(suppl. 1), 5200-5205. https://doi.org/10.1073/pnas.0307545100 [OpenAlex: W2097777089; Dimensions: pub.1049986679; WoS: unknown]

## Metadata

- Concept ID: `collaboration_strength_distribution`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Newman (2004) (2004)
- Latest seen paper: Newman (2004) (2004)
- Primary reference DOI: `10.1073/pnas.0307545100`
- OpenAlex ID: `W2097777089`
- Dimensions ID: `pub.1049986679`
- SciSciNet ID: `W2097777089`
- Aliases: weighted tie strength distribution; coauthorship strength distribution; collaboration edge-weight distribution; repeated collaboration strength
