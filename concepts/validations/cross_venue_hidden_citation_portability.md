# Cross-venue hidden-citation portability

## Summary

Cross-venue hidden-citation portability validates hidden-citation findings by checking whether hidden-credit patterns recur across publication venues, fields, and full-text corpora.

## Canonical Form

- Unit of analysis: venue, field, corpus, topic, catchphrase, foundational paper, or time window.
- Typical representation: matched hidden/explicit citation time series across venues or fields.
- Validation target: distinguish a general hidden-credit phenomenon from an artifact of one corpus, venue, or discipline.
- Empirical signature: hidden-citation prevalence and mention-citation relationships appear in multiple venues or disciplines after applying comparable detection rules.

## Uses in Science of Science

- Provides an external-validity check for [hidden citations](../measures/hidden_citations.md) and [catchphrase-foundational-paper matching](../methods/catchphrase_foundational_paper_matching.md).
- Helps interpret whether [discourse-saturation hidden-credit burden](../mechanisms/discourse_saturation_hidden_credit_burden.md) is field-specific or portable.
- Makes [hidden-citation full-text access barrier](hidden_citation_full_text_access_barrier.md) visible by separating portability tests from universal corpus coverage claims.
- Supports responsible metric design by requiring hidden-credit measures to document where they have been validated.

## Operationalization

- Apply the same hidden-citation detection pipeline to multiple venues, disciplines, or full-text sources.
- Compare `p(cite | mention)`, hidden-to-explicit ratios, hidden-citation time series, and topic-level catchphrase specificity across corpora.
- Use matched topics where possible and report differences in corpus access, citation parsing, reference resolution, and field vocabulary.
- Treat positive portability as validation of a pattern, not as proof that all fields have equal hidden-credit rates.

## Evidence and Validations

- Verified full-text evidence from Meng, Varol, and Barabasi (2024) reports that hidden citations emerge regardless of publishing venue and discipline.
- The paper checks the negative relationship between topic mentions and `p(cite | mention)` across multiple publication venues.
- Meng et al. also extend examples beyond arXiv physics to computer-science and biology topics, comparing arXiv and Nature time series where available.
- The same evidence is bounded by corpus access, making this validation complementary to the [hidden-citation full-text access barrier](hidden_citation_full_text_access_barrier.md).

## Caveats

- Portability tests depend on comparable full-text extraction and reference resolution.
- Fields without stable catchphrases may have hidden credit that this validation cannot observe.
- Venue effects can reflect article type, reference limits, field composition, or corpus coverage rather than hidden-credit behavior alone.

## Links

- [hidden citations](../measures/hidden_citations.md)
- [mention-conditioned citation probability](../measures/mention_conditioned_citation_probability.md)
- [hidden-to-explicit citation ratio](../measures/hidden_to_explicit_citation_ratio.md)
- [discourse-saturation hidden-credit burden](../mechanisms/discourse_saturation_hidden_credit_burden.md)
- [hidden-citation full-text access barrier](hidden_citation_full_text_access_barrier.md)
- [full-text hidden-citation corpora](../datasets/full_text_hidden_citation_corpora.md)
- [catchphrase-foundational exclusivity](catchphrase_foundational_exclusivity.md)

## References

- Meng, X., Varol, O., & Barabasi, A.-L. (2024). Hidden citations obscure true impact in science. *PNAS Nexus*, 3(5), pgae155. https://doi.org/10.1093/pnasnexus/pgae155 [OpenAlex: W4396694003; Dimensions: pub.1171389234; WoS: unknown]

## Metadata

- Concept ID: `cross_venue_hidden_citation_portability`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Meng et al. (2024) (2024)
- Latest seen paper: Meng et al. (2024) (2024)
- Primary reference DOI: `10.1093/pnasnexus/pgae155`
- OpenAlex ID: `W4396694003`
- Dimensions ID: `pub.1171389234`
- SciSciNet ID: `W4396694003`
- Aliases: hidden-citation portability; cross-field hidden citation validation; venue-portable hidden credit; hidden-citation external validity
