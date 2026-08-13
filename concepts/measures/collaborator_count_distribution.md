# Collaborator-count distribution

## Summary

The collaborator-count distribution measures how many distinct collaborators each scientist has in a coauthorship network, treating collaborator count as node degree.

## Canonical Form

- Unit of analysis: author, field, database, time window, or coauthorship network.
- Typical representation: degree distribution, histogram of collaborator counts, power law with exponential cutoff, mean collaborator count, or fat-tailed distribution.
- Mechanism or measurement target: inequality in collaboration reach, field authorship norms, hub scientists, lab-director effects, and large-team authorship.
- Empirical signature: most scientists have few collaborators, while a small number have many collaborators, often with field-specific cutoff behavior.

## Uses in Science of Science

- Gives [coauthorship networks](../representations/coauthorship_networks.md) a basic node-level degree distribution.
- Can be related back to article-team sizes with [collaborator-distribution team-size projection](../methods/collaborator_distribution_team_size_projection.md).
- Provides a field-level complement to [collaboration assortativity](collaboration_assortativity.md), [collaboration clustering coefficient](collaboration_clustering_coefficient.md), and [scientific brokerage centrality](scientific_brokerage_centrality.md).
- Helps interpret [scale-free degree distributions](scale_free_degree_distributions.md) in social science-of-science networks rather than only citation or web networks.
- Supports comparisons between theoretical, experimental, biomedical, mathematical, and large-team collaboration regimes.

## Operationalization

- Construct an author-disambiguated coauthorship network over a defined field and time window.
- Count distinct collaborators per author, optionally using [weighted coauthorship edges](../representations/weighted_coauthorship_edges.md) for large-team sensitivity checks.
- Audit [mega-collaboration degree inflation](../validations/mega_collaboration_degree_inflation.md) before interpreting high-degree tails as personal acquaintance or brokerage.
- Plot the empirical degree distribution and fit candidate forms such as power law, power law with exponential cutoff, lognormal, or negative binomial.
- Use [finite-window tail cutoff](../validations/finite_window_tail_cutoff.md) and [collaborator fat-tail cutoff](../validations/collaborator_fat_tail_cutoff.md) checks before calling the distribution scale-free.
- Interpret fitted exponents with [collaborator exponent dominance regime](collaborator_exponent_dominance_regime.md) and audit biomedical high-degree tails for [lab-director degree-inflation signature](../validations/lab_director_degree_inflation_signature.md).
- Report field, database, time-window, and author-disambiguation choices because each changes the observed tail.

## Evidence and Validations

- Verified full-text evidence from Newman (2001) defines average number of collaborators as average degree in the collaboration graph and reports large field differences, from low counts in theoretical/computer-science databases to much higher counts in biomedical and high-energy experimental data.
- Newman (2001) shows histograms of collaborator counts and reports that the distributions are well fit by a power-law form with an exponential cutoff rather than by a pure power law in most cases.
- Newman (2001) also interprets exponent regimes around a threshold of two and proposes lab-director signatures as a possible source of extreme biomedical collaborator counts.
- The paper interprets the cutoff as partly a consequence of finite observation windows and finite scientific careers.
- The same full text reports especially large collaborator counts in SPIRES high-energy physics, with an average of 173 collaborators per author, and explicitly questions whether such projected coauthorship ties represent ordinary social acquaintance.
- Verified full-text evidence from Newman (2004) reports fat-tailed collaborator-count distributions across biology, physics, and mathematics, with a small fraction of scientists having very large numbers of collaborators.
- Verified full-text evidence from Milojevic (2014) adds a projection caveat: under short-window assumptions, collaborator-count tails can partly reflect the team-size distribution, especially the extended-team tail.

## Caveats

- Collaborator count is highly sensitive to time-window length, author disambiguation, consortium authorship, and field norms.
- High degree can reflect large-team conventions, lab-director signatures, or database artifacts rather than active social ties.
- Degree distribution alone does not identify brokerage, closure, tie strength, or contribution role.

## Links

- [coauthorship networks](../representations/coauthorship_networks.md)
- [collaborator-distribution team-size projection](../methods/collaborator_distribution_team_size_projection.md)
- [small-world collaboration structure](../representations/small_world_collaboration_structure.md)
- [weighted coauthorship edges](../representations/weighted_coauthorship_edges.md)
- [mega-collaboration degree inflation](../validations/mega_collaboration_degree_inflation.md)
- [finite-window tail cutoff](../validations/finite_window_tail_cutoff.md)
- [collaborator fat-tail cutoff](../validations/collaborator_fat_tail_cutoff.md)
- [collaborator exponent dominance regime](collaborator_exponent_dominance_regime.md)
- [lab-director degree-inflation signature](../validations/lab_director_degree_inflation_signature.md)
- [collaboration assortativity](collaboration_assortativity.md)
- [collaboration clustering coefficient](collaboration_clustering_coefficient.md)
- [scientific brokerage centrality](scientific_brokerage_centrality.md)
- [collaboration giant component](collaboration_giant_component.md)
- [scale-free degree distributions](scale_free_degree_distributions.md)
- [author name disambiguation](../methods/author_name_disambiguation.md)

## References

- Newman, M. E. J. (2001). The structure of scientific collaboration networks. *Proceedings of the National Academy of Sciences*, 98(2), 404-409. https://doi.org/10.1073/pnas.98.2.404 [OpenAlex: W2125315567; Dimensions: pub.1018280471; WoS: unknown]
- Newman, M. E. J. (2001). Scientific collaboration networks. I. Network construction and fundamental results. *Physical Review E*, 64(1), 016131. https://doi.org/10.1103/PhysRevE.64.016131 [OpenAlex: W2025572017; Dimensions: pub.1060727007; WoS: unknown]
- Newman, M. E. J. (2004). Coauthorship networks and patterns of scientific collaboration. *Proceedings of the National Academy of Sciences*, 101(suppl. 1), 5200-5205. https://doi.org/10.1073/pnas.0307545100 [OpenAlex: W2097777089; Dimensions: pub.1049986679; WoS: unknown]

## Metadata

- Concept ID: `collaborator_count_distribution`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Newman (2001) (2001)
- Latest seen paper: Newman (2004) (2004)
- Primary reference DOI: `10.1073/pnas.98.2.404`
- OpenAlex ID: `W2125315567`
- Dimensions ID: `pub.1018280471`
- SciSciNet ID: `W2125315567`
- Aliases: collaborator degree distribution; coauthor degree distribution; collaboration degree distribution; number of collaborators
