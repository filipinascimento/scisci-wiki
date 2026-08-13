# Papers-per-author distribution

## Summary

The papers-per-author distribution measures scientific productivity as the number of papers each author writes within a database, field, and observation window.

## Canonical Form

- Unit of analysis: author, field, database, time window, or author cohort.
- Typical representation: publication-count distribution, Lotka-like productivity distribution, fat-tailed productivity histogram, or papers-per-author mean.
- Mechanism or measurement target: productivity inequality, field authorship norms, publication capacity, and finite-window productivity.
- Empirical signature: most authors publish relatively few papers in the window, while a small number publish many.

## Uses in Science of Science

- Provides a productivity counterpart to [collaborator-count distribution](collaborator_count_distribution.md).
- Helps distinguish productivity inequality from collaboration inequality in [coauthorship networks](../representations/coauthorship_networks.md).
- Requires [finite-window tail cutoff](../validations/finite_window_tail_cutoff.md) checks when publication counts are measured over a short observation window.
- Links historical bibliometric productivity laws to modern author-disambiguated databases.
- Supports controls for career-impact and evaluation analyses, including [scientific career impact dynamics](../mechanisms/scientific_career_impact.md), [h index](h_index.md), and [individual Q parameter](individual_q_parameter.md).

## Operationalization

- Define an author-disambiguated publication corpus, field boundary, document type filter, and time window.
- Count papers per author, with optional fractional counting for large teams or multi-field assignments.
- Plot and fit productivity distributions, comparing pure power-law, power-law-with-cutoff, lognormal, and other heavy-tailed forms.
- Report author disambiguation, database coverage, and whether consortium/group-authored records are included.

## Evidence and Validations

- Verified full-text evidence from Newman (2001) plots histograms of the number of papers authors wrote in several collaboration databases and reports a form similar to the collaborator-count distribution.
- Newman (2001) describes this as a generalization of Lotka's law of scientific productivity and notes that the observed exponential cutoff likely reflects the finite study window, now split out as [finite-window tail cutoff](../validations/finite_window_tail_cutoff.md).
- Verified full-text evidence from Newman (2004) reports mean papers per author across biology, physics, and mathematics and frames the number of papers authored as a long-standing bibliometric productivity measure.
- Newman (2004) notes that productivity distributions are fat-tailed, with a small number of scientists producing many papers, consistent with earlier bibliometric evidence.

## Caveats

- Publication counts are field-, career-stage-, database-, and document-type dependent.
- Papers-per-author can be inflated by large-team conventions and does not measure contribution quality.
- Author disambiguation errors can merge or split productivity histories.

## Links

- [coauthorship networks](../representations/coauthorship_networks.md)
- [collaborator-count distribution](collaborator_count_distribution.md)
- [finite-window tail cutoff](../validations/finite_window_tail_cutoff.md)
- [h index](h_index.md)
- [scientific career impact dynamics](../mechanisms/scientific_career_impact.md)
- [individual Q parameter](individual_q_parameter.md)
- [author name disambiguation](../methods/author_name_disambiguation.md)
- [contribution role vectors](../representations/contribution_role_vectors.md)
- [responsible metrics](responsible_metrics.md)

## References

- Newman, M. E. J. (2001). The structure of scientific collaboration networks. *Proceedings of the National Academy of Sciences*, 98(2), 404-409. https://doi.org/10.1073/pnas.98.2.404 [OpenAlex: W2125315567; Dimensions: pub.1018280471; WoS: unknown]
- Newman, M. E. J. (2001). Scientific collaboration networks. I. Network construction and fundamental results. *Physical Review E*, 64(1), 016131. https://doi.org/10.1103/PhysRevE.64.016131 [OpenAlex: W2025572017; Dimensions: pub.1060727007; WoS: unknown]
- Newman, M. E. J. (2004). Coauthorship networks and patterns of scientific collaboration. *Proceedings of the National Academy of Sciences*, 101(suppl. 1), 5200-5205. https://doi.org/10.1073/pnas.0307545100 [OpenAlex: W2097777089; Dimensions: pub.1049986679; WoS: unknown]

## Metadata

- Concept ID: `papers_per_author_distribution`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Newman (2001) (2001)
- Latest seen paper: Newman (2004) (2004)
- Primary reference DOI: `10.1073/pnas.98.2.404`
- OpenAlex ID: `W2125315567`
- Dimensions ID: `pub.1018280471`
- SciSciNet ID: `W2125315567`
- Aliases: publication-count distribution; scientific productivity distribution; papers authored per scientist; author productivity distribution
