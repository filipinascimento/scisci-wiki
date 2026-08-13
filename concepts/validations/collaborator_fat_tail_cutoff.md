# Collaborator fat-tail cutoff

## Summary

Collaborator fat-tail cutoff is the validation concern that collaborator-count distributions can be broad without being pure power laws, often fitting better as power laws with exponential cutoffs.

## Canonical Form

- Unit of analysis: author, collaborator count, field panel, time window, or degree distribution.
- Typical representation: collaborator-count histogram, fat-tail model comparison, exponential cutoff, or window-sensitivity test.
- Validation target: preventing overclaiming that a coauthorship network is scale-free from a visually broad collaborator distribution.
- Empirical signature: many authors have few collaborators and a few have very many, but the high-degree tail bends downward relative to a pure power law.

## Uses in Science of Science

- Adds distributional caution to [collaborator-count distribution](../measures/collaborator_count_distribution.md).
- Is a collaborator-specific case of [finite-window tail cutoff](finite_window_tail_cutoff.md).
- Connects coauthorship evidence to [scale-free degree distributions](../measures/scale_free_degree_distributions.md) without assuming identical functional forms.
- Helps separate collaboration-network heavy tails from Web or citation-network scale-free claims.
- Supplies a robustness check for [coauthorship networks](../representations/coauthorship_networks.md) and [field collaboration-mode contrast](../measures/field_collaboration_mode_contrast.md).

## Operationalization

- Compute collaborator-count distributions by field and time window.
- Compare pure power-law, power-law-with-cutoff, lognormal, and other heavy-tailed alternatives.
- Test whether tail cutoffs change when the observation window expands.
- Report team-size and source-coverage effects that can inflate or truncate collaborator counts.

## Evidence and Validations

- Verified full-text evidence from Newman (2001) reports curvature in collaborator-count distributions and identifies the finite five-year window as one possible source of an exponential cutoff.
- Verified full-text evidence from Newman (2004) reports fat-tailed collaborator-count distributions across biomedical research, physics, and mathematics.
- The paper states that these distributions do not follow pure power laws and are therefore not scale-free networks in the strict jargon used for some other networks.
- Newman notes that a power law with an exponential cutoff appears to fit reasonably and suggests that the cutoff may be produced by the finite time window.
- The paper explicitly frames varying the window size as a possible test, although it does not perform that test.

## Caveats

- Cutoffs can reflect true capacity limits, finite observation windows, field boundaries, or author-disambiguation errors.
- Large-team fields can create very high collaborator counts through projection from a few papers.
- Distributional form should be tested with model comparison, not inferred from log-log plots alone.

## Links

- [collaborator-count distribution](../measures/collaborator_count_distribution.md)
- [finite-window tail cutoff](finite_window_tail_cutoff.md)
- [coauthorship networks](../representations/coauthorship_networks.md)
- [scale-free degree distributions](../measures/scale_free_degree_distributions.md)
- [field collaboration-mode contrast](../measures/field_collaboration_mode_contrast.md)
- [coauthorship source-domain panels](../datasets/coauthorship_source_domain_panels.md)
- [citation functional-form diagnostics](citation_functional_form_diagnostics.md)
- [time-resolved coauthorship reconstruction](../methods/time_resolved_coauthorship_reconstruction.md)

## References

- Newman, M. E. J. (2001). Scientific collaboration networks. I. Network construction and fundamental results. *Physical Review E*, 64(1), 016131. https://doi.org/10.1103/PhysRevE.64.016131 [OpenAlex: W2025572017; Dimensions: pub.1060727007; WoS: unknown]
- Newman, M. E. J. (2004). Coauthorship networks and patterns of scientific collaboration. *Proceedings of the National Academy of Sciences*, 101(suppl. 1), 5200-5205. https://doi.org/10.1073/pnas.0307545100 [OpenAlex: W2097777089; Dimensions: pub.1049986679; WoS: unknown]

## Metadata

- Concept ID: `collaborator_fat_tail_cutoff`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Newman (2001) (2001)
- Latest seen paper: Newman (2004) (2004)
- Primary reference DOI: `10.1103/PhysRevE.64.016131`
- OpenAlex ID: `W2025572017`
- Dimensions ID: `pub.1060727007`
- SciSciNet ID: `unknown`
- Aliases: collaborator cutoff; coauthor degree exponential cutoff; non-scale-free collaborator tail; power-law cutoff collaboration
