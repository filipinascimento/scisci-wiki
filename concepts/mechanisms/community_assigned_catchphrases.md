# Community-assigned catchphrases

## Summary

Community-assigned catchphrases are field-level labels for discoveries, methods, datasets, or experiments that are often attached after the foundational paper appears and later become shorthand for crediting the work.

## Canonical Form

- Unit of analysis: catchphrase, eponym, experiment name, topic label, foundational paper, author group, or field community.
- Typical representation: phrase-paper pair, phrase-title/abstract match flag, eponym indicator, experiment-name indicator, and emergence window.
- Mechanism: communities create compact conceptual symbols that make a discovery recognizable without explicit citation to the original paper.
- Empirical signature: a phrase becomes strongly associated with a foundational paper despite being absent from the paper's own title or abstract.

## Uses in Science of Science

- Explains how [hidden citations](../measures/hidden_citations.md) become measurable: the field needs a stable label that points back to a discovery.
- Provides a mechanism behind [catchphrase-foundational exclusivity](../validations/catchphrase_foundational_exclusivity.md) and [catchphrase-foundational-paper matching](../methods/catchphrase_foundational_paper_matching.md).
- Connects [obliteration by incorporation](obliteration_by_incorporation.md) to community language, eponyms, experiment names, and topic labels.
- Helps distinguish discoveries that lack hidden-citation evidence because they lack stable names from discoveries that are genuinely unused.

## Operationalization

- Compare catchphrases against the title and abstract of candidate foundational papers.
- Classify catchphrases as eponyms, experiment names, tool/database names, or general topic labels.
- Estimate phrase-paper exclusivity through conditional probabilities or entropies, then inspect whether the phrase originated with authors or later community usage.
- Analyze author-list size, field, and discovery type when comparing eponym, experiment, and non-eponym catchphrases.

## Evidence and Validations

- Verified full-text evidence from Meng, Varol, and Barabasi (2024) reports that most foundational-paper catchphrases do not appear in the titles or abstracts of the foundational papers.
- Meng et al. interpret this as evidence that catchphrases are typically assigned later by the community rather than proposed by the original authors.
- The paper reports distinct catchphrase types, including eponyms and experimental project names, and shows that eponym-related catchphrases are associated with shorter author lists than experiment-related catchphrases.
- Their mutual-exclusivity checks show that catchphrases can become conceptual symbols that point to one or a few foundational papers.

## Caveats

- Community labels can vary across languages, fields, and generations of researchers.
- A stable catchphrase can privilege discoverers whose names or projects become labels, leaving other contributions less visible.
- Absence of a catchphrase is not evidence that the underlying discovery lacks influence.

## Links

- [hidden citations](../measures/hidden_citations.md)
- [catchphrase-foundational-paper matching](../methods/catchphrase_foundational_paper_matching.md)
- [catchphrase-foundational exclusivity](../validations/catchphrase_foundational_exclusivity.md)
- [obliteration by incorporation](obliteration_by_incorporation.md)
- [hidden-to-explicit citation ratio](../measures/hidden_to_explicit_citation_ratio.md)
- [full-text hidden-citation corpora](../datasets/full_text_hidden_citation_corpora.md)
- [responsible metrics](../measures/responsible_metrics.md)
- [cumulative advantage distribution](../methods/cumulative_advantage_distribution.md)

## References

- Meng, X., Varol, O., & Barabasi, A.-L. (2024). Hidden citations obscure true impact in science. *PNAS Nexus*, 3(5), pgae155. https://doi.org/10.1093/pnasnexus/pgae155 [OpenAlex: W4396694003; Dimensions: pub.1171389234; WoS: unknown]

## Metadata

- Concept ID: `community_assigned_catchphrases`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: Meng et al. (2024) (2024)
- Latest seen paper: Meng et al. (2024) (2024)
- Primary reference DOI: `10.1093/pnasnexus/pgae155`
- OpenAlex ID: `W4396694003`
- Dimensions ID: `pub.1171389234`
- SciSciNet ID: `W4396694003`
- Aliases: community-named discoveries; post hoc scientific catchphrases; eponymic catchphrase formation; conceptual symbols
