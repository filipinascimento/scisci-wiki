# Citation-context anchor windowing

## Summary

Citation-context anchor windowing restricts citation-context text to a small window around the explicit citation anchor so topic extraction keeps local topical signal while reducing noise and computation.

## Canonical Form

- Unit of analysis: citation context, citation anchor, n-gram, cited paper, topic model input, or text window.
- Typical representation: pre-anchor window, context-length rule, anchor-centered token slice, or citation-context tuple list.
- Method target: create compact text inputs for topic, catchphrase, or citation-function models.
- Empirical signature: short windows near citation anchors retain enough topical information for downstream models while reducing corpus size.

## Uses in Science of Science

- Provides a preprocessing rule for [catchphrase-foundational-paper matching](catchphrase_foundational_paper_matching.md).
- Converts [citation context windows](../representations/citation_context_windows.md) into model-ready input.
- Supports [topic models](topic_models.md), [Bayesian mention-citation estimation](bayesian_mention_citation_estimation.md), and hidden-credit detection.
- Makes citation-context extraction reproducible by recording the anchor side and window size.

## Operationalization

- Identify citation anchors in full text and extract surrounding citation contexts.
- Choose a fixed number of tokens or n-grams before or around the anchor.
- Drop terms outside a domain dictionary or phrase list after windowing.
- Emit document-term or phrase-document tuples for downstream topic modeling.
- Validate that the chosen window preserves topical patterns against wider-window or full-context baselines.

## Evidence and Validations

- Verified full-text evidence from Meng, Varol, and Barabasi (2024) generates LDA inputs by shrinking citation contexts to only three n-grams ahead of the citation anchor.
- The authors state this was the most computationally efficient way to extract topical patterns without losing too much information.
- Their pipeline then deletes terms outside the dictionary and creates word-document pairs for LDA.

## Caveats

- Pre-anchor windows can miss explanatory text that follows a citation.
- The optimal window size may vary by writing style, field, and citation-function class.
- Anchor windowing is unsuitable when the target is diffuse section-level credit rather than local citation context.

## Links

- [catchphrase-foundational-paper matching](catchphrase_foundational_paper_matching.md)
- [citation context windows](../representations/citation_context_windows.md)
- [citation contexts](../representations/citation_contexts.md)
- [topic models](topic_models.md)
- [Bayesian mention-citation estimation](bayesian_mention_citation_estimation.md)
- [hidden citations](../measures/hidden_citations.md)

## References

- Meng, X., Varol, O., & Barabasi, A.-L. (2024). Hidden citations obscure true impact in science. *PNAS Nexus*, 3(5), pgae155. https://doi.org/10.1093/pnasnexus/pgae155 [OpenAlex: W4396694003; Dimensions: pub.1171389234; SciSciNet: W4396694003; WoS: unknown]

## Metadata

- Concept ID: `citation_context_anchor_windowing`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Meng et al. (2024) (2024)
- Latest seen paper: Meng et al. (2024) (2024)
- Primary reference DOI: `10.1093/pnasnexus/pgae155`
- OpenAlex ID: `W4396694003`
- Dimensions ID: `pub.1171389234`
- SciSciNet ID: `W4396694003`
- Aliases: citation-anchor context window; pre-anchor n-gram windowing; local citation-context slicing; anchor-centered context preprocessing
