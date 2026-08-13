# Reference/topic role-contribution signal

## Summary

References introduced and topics directed can validate whether inferred lead roles capture intellectual input.

## Canonical Form

- Unit of analysis: author-paper role, introduced reference, directed topic, focal paper, lead probability, or support probability.
- Typical representation: role-validation signal based on author-reference and author-topic attribution.
- Mechanism, measurement, or validation target: intellectual-input validation of lead and support role labels.
- Empirical signature: lead authors are more likely than support authors to introduce references and direct topics.

## Uses in Science of Science

- Refines role-label validation by linking it to [focal paper career role signal validation](focal_paper_career_role_signal_validation.md) and [topic keyword embedding novelty](../measures/topic_keyword_embedding_novelty.md).
- Useful as a reusable check when [citation networks](../representations/citation_networks.md) is used in science-of-science inference.
- Creates cross-links to [semantic embeddings](../representations/semantic_embeddings.md) so the motif is not interpreted in isolation.

## Operationalization

- Impute author-to-reference and author-to-topic contribution signals.
- Compare signal probabilities for lead and support authors.
- Use the signals as validation evidence or as auxiliary features in role-classifier audits.

## Evidence and Validations

- Verified local full text from Xu et al. (2022) reports that lead authors are more likely to introduce references and direct topics, while support authors are less likely to do so.
- The result connects role labels to intellectual contribution traces beyond byline position.

## Caveats

- The verified text gives the signal direction but not every imputation detail.
- Reference and topic attribution can be sensitive to NLP and citation-parsing choices.

## Links

- [Focal-paper career role signal validation](focal_paper_career_role_signal_validation.md)
- [Topic-keyword embedding novelty](../measures/topic_keyword_embedding_novelty.md)
- [Citation networks](../representations/citation_networks.md)
- [Semantic embeddings](../representations/semantic_embeddings.md)
- [Lead-role ratio](../measures/lead_role_ratio.md)
- [Contribution role vectors](../representations/contribution_role_vectors.md)

## References

- Xu, F., Wu, L., & Evans, J. A. (2022). Flat teams drive scientific innovation. *Proceedings of the National Academy of Sciences*, 119(23), e2200927119. https://doi.org/10.1073/pnas.2200927119 [OpenAlex: W4226148732; Dimensions: pub.1148413764; WoS: unknown]

## Metadata

- Concept ID: `reference_topic_role_contribution_signal`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Xu et al. (2022) (2022)
- Latest seen paper: Xu et al. (2022) (2022)
- Primary reference DOI: `10.1073/pnas.2200927119`
- OpenAlex ID: `W4226148732`
- Dimensions ID: `pub.1148413764`
- SciSciNet ID: `W4226148732`
- Aliases: topic-reference leadership signal; intellectual-input role signal; focal idea contribution signal
