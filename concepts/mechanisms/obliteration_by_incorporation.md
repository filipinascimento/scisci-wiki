# Obliteration by incorporation

## Summary

Obliteration by incorporation occurs when a finding becomes so integrated into common knowledge that later authors stop citing the original source.

## Canonical Form

- Unit of analysis: ideas, methods, terms, facts, or canonical papers.
- Typical representation: citation trajectory combined with textual diffusion of the idea.
- Mechanism: normalization and textbook incorporation reduce explicit credit to the origin.
- Empirical signature: continued use of an idea with declining or absent citation to its source.

## Uses in Science of Science

- Explains why citation counts can understate foundational influence.
- Motivates combining full-text concept tracking with citation data.
- Connects credit allocation, historical reconstruction, and measurement validity.
- Links explicit citation measures to [hidden citations](../measures/hidden_citations.md), where full-text mentions carry credit that reference lists miss.

## Operationalization

- Track phrase/concept diffusion in full text over time and compare with citations to original works.
- Use citation context analysis to identify whether later papers cite intermediaries, reviews, or no source.
- Estimate [mention-conditioned citation probability](../measures/mention_conditioned_citation_probability.md) and [hidden-to-explicit citation ratios](../measures/hidden_to_explicit_citation_ratio.md) for topics with stable catchphrases.
- Compare textbook/manual adoption with article citation trajectories.

## Evidence and Validations

- The classic formulation is associated with Merton; robust operational validation requires full text and citation-context evidence.
- Verified full-text evidence from Meng et al. (2024) operationalizes OBI as hidden citations: clear textual mentions of a discovery, catchphrase, or topic without an explicit citation to the foundational paper.
- Meng et al. identify 343 physics topics with hidden citations and report that hidden citations can outnumber explicit citation counts for influential discoveries.
- Their evidence also separates pure untracked credit from [citation diversion](citation_diversion_hierarchy.md): hidden citations often cite reviews, books, applications, or nearby work that is one or two citation steps from the original foundational paper.

## Caveats

- Absence of citation can reflect many causes, including space limits, strategic citation, or independent rediscovery.
- Requires careful historical work to identify origin claims.
- Full-text operationalization depends on catchphrase specificity and access to sufficiently broad article text.

## Links

- [matthew effect](../mechanisms/matthew_effect.md)
- [citation aging obsolescence](../mechanisms/citation_aging_obsolescence.md)
- [hidden citations](../measures/hidden_citations.md)
- [citation diversion hierarchy](citation_diversion_hierarchy.md)
- [mention-conditioned citation probability](../measures/mention_conditioned_citation_probability.md)
- [hidden-to-explicit citation ratio](../measures/hidden_to_explicit_citation_ratio.md)
- [catchphrase-foundational-paper matching](../methods/catchphrase_foundational_paper_matching.md)
- [citation impact indicators](../measures/citation_impact_indicators.md)
- [citation networks](../representations/citation_networks.md)
- [topic models](../methods/topic_models.md)

## References

- Merton, R. K. (1965). *On the shoulders of giants: A Shandean postscript*. Free Press. [OpenAlex: unknown; Dimensions: unknown; WoS: unknown]
- Merton, R. K. (1968). The Matthew effect in science. *Science*, 159(3810), 56-63. https://doi.org/10.1126/science.159.3810.56 [OpenAlex: W4292887282; Dimensions: pub.1062493069; WoS: unknown]
- Meng, X., Varol, O., & Barabasi, A.-L. (2024). Hidden citations obscure true impact in science. *PNAS Nexus*, 3(5), pgae155. https://doi.org/10.1093/pnasnexus/pgae155 [OpenAlex: W4396694003; Dimensions: pub.1171389234; WoS: unknown]
- Fortunato, S., Bergstrom, C. T., Borner, K., Evans, J. A., Helbing, D., Milojevic, S., Petersen, A. M., Radicchi, F., Sinatra, R., Uzzi, B., Vespignani, A., Waltman, L., Wang, D., & Barabasi, A.-L. (2018). Science of science. *Science*, 359(6379), eaao0185. https://doi.org/10.1126/science.aao0185 [OpenAlex: W2793071066; Dimensions: pub.1101303008; WoS: unknown]

## Metadata

- Concept ID: `obliteration_by_incorporation`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: Merton (1965) (1965)
- Latest seen paper: Meng et al. (2024) (2024)
- Primary reference DOI: `unknown`
- OpenAlex ID: `unknown`
- Aliases: OBI; uncited canonical knowledge; citation amnesia
