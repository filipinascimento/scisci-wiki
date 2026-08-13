# Collaborator exponent dominance regime

## Summary

Collaborator exponent dominance regime interprets the fitted exponent of a collaborator-count distribution as indicating whether average network properties are shaped mainly by many low-degree authors or by a small number of high-degree hubs.

## Canonical Form

- Unit of analysis: field, coauthorship network, collaborator-count distribution, fitted exponent, or degree regime.
- Typical representation: power-law or truncated-power-law exponent compared with a threshold such as `tau = 2`.
- Measurement target: whether collaboration-network averages are hub-dominated or low-degree-author-dominated.
- Empirical signature: fields with lower exponents are more affected by high-degree authors, while fields with higher exponents are less dominated by hubs.

## Uses in Science of Science

- Adds interpretive structure to [collaborator-count distribution](collaborator_count_distribution.md).
- Helps compare fields in [field collaboration-mode contrast](field_collaboration_mode_contrast.md) beyond mean collaborator counts.
- Connects coauthorship-network degree distributions to [scale-free degree distributions](scale_free_degree_distributions.md) without assuming a pure power law.
- Supports validation of hub-sensitive measures such as centrality, giant-component size, and diffusion reach.

## Operationalization

- Fit collaborator-count distributions with power-law and truncated-power-law forms.
- Estimate the exponent and its uncertainty under the chosen model.
- Compare exponent regimes across fields while holding time window, source coverage, and author disambiguation as constant as possible.
- Treat the exponent as an interpretation aid, not as a stand-alone proof of network mechanism.
- Pair exponent interpretation with [collaborator fat-tail cutoff](../validations/collaborator_fat_tail_cutoff.md), large-team audits, and field-specific authoring norms.

## Evidence and Validations

- Verified full-text evidence from Newman (2001) reports fitted exponents for collaborator-count distributions across MEDLINE, Los Alamos, SPIRES, and NCSTRL source-domain panels.
- Newman states that `tau = 2` separates regimes in which average network properties are dominated by high-collaboration individuals versus many low-collaboration authors.
- The paper finds exponents near 1 in several physics and computer-science panels, implying hub-sensitive average properties.
- MEDLINE has an exponent near 2.5, which Newman interprets as a regime where highly connected individuals do not dominate average network properties despite large apparent collaborator counts.
- The same discussion cautions that field-specific authorship conventions and projected large-team ties affect the interpretation.

## Caveats

- Exponent estimates are sensitive to binning, model choice, cutoff, time window, and author disambiguation.
- A threshold such as `tau = 2` is a stylized guide, not a universal decision rule for empirical networks.
- Hub dominance can be inflated by mega-collaborations, lab-director signatures, or source-coverage artifacts.

## Links

- [collaborator-count distribution](collaborator_count_distribution.md)
- [field collaboration-mode contrast](field_collaboration_mode_contrast.md)
- [collaborator fat-tail cutoff](../validations/collaborator_fat_tail_cutoff.md)
- [lab-director degree-inflation signature](../validations/lab_director_degree_inflation_signature.md)
- [mega-collaboration degree inflation](../validations/mega_collaboration_degree_inflation.md)
- [scale-free degree distributions](scale_free_degree_distributions.md)
- [coauthorship networks](../representations/coauthorship_networks.md)

## References

- Newman, M. E. J. (2001). The structure of scientific collaboration networks. *Proceedings of the National Academy of Sciences*, 98(2), 404-409. https://doi.org/10.1073/pnas.98.2.404 [OpenAlex: W2125315567; Dimensions: pub.1018280471; WoS: unknown]

## Metadata

- Concept ID: `collaborator_exponent_dominance_regime`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Newman (2001) (2001)
- Latest seen paper: Newman (2001) (2001)
- Primary reference DOI: `10.1073/pnas.98.2.404`
- OpenAlex ID: `W2125315567`
- Dimensions ID: `pub.1018280471`
- SciSciNet ID: `W2125315567`
- Aliases: collaborator exponent regime; hub-dominated collaborator tail; tau-two collaborator threshold; degree-exponent dominance
