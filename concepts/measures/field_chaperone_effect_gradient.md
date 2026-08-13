# Field chaperone-effect gradient

## Summary

Field chaperone-effect gradient compares normalized venue chaperone-effect magnitudes across fields to show where prior junior-author venue experience is more strongly associated with later senior authorship.

## Canonical Form

- Unit of analysis: journal, field, journal-year, normalized chaperone-effect ratio, or field-level distribution.
- Typical representation: distribution of `C = c / crandom` by field, field means, rank-sum comparisons, or interdisciplinary-versus-specialized contrast.
- Measurement target: cross-field heterogeneity in venue-specific apprenticeship and author-order transition structure.
- Empirical signature: normalized chaperone-effect magnitudes are higher in biology and interdisciplinary journals than in mathematics or physics.

## Uses in Science of Science

- Turns [chaperone-effect ratio](chaperone_effect_ratio.md) into a cross-field comparative measure.
- Adds a field-heterogeneity layer to [venue chaperone effect](../mechanisms/venue_chaperone_effect.md).
- Depends on [random author-order chaperone null](../validations/random_author_order_chaperone_null.md) before comparing fields with different team sizes and productivity.
- Requires [alphabetical author-order chaperone null](../validations/alphabetical_author_order_chaperone_null.md) where alphabetic bylines can weaken last-author role interpretation.
- Connects field comparison to [journal subject-category thesaurus matching](../methods/journal_subject_category_thesaurus_matching.md) and source-domain journal panels.

## Operationalization

- Assign journals to field panels and compute `c`, `crandom`, and `C` for each journal or journal-year.
- Collapse recent yearly distributions or another declared comparison window into field-level distributions.
- Compare distributions across fields with nonparametric tests or uncertainty intervals.
- Keep interdisciplinary journals separate when their venue-specific submission skills may differ from field-specialist journals.
- Interpret gradients only after checking author-order conventions and the accepted-publication denominator.

## Evidence and Validations

- Verified full-text evidence from Sekara et al. (2018) reports a field gradient in normalized `C` values: mathematics and physics are lower, chemistry is near one, medicine and biology are higher, and interdisciplinary journals are highest.
- The paper reports average `C` values of about 0.73 for mathematics, 0.91 for physics, 1.01 for chemistry, 1.21 for medicine, 1.41 for biology, and 1.68 for interdisciplinary journals.
- Sekara et al. use Wilcoxon rank-sum tests to show that the field distributions are distinguishable.
- The field gradient is interpreted as stronger venue-specific experience effects in high-impact, broad-audience journals than in fields where alphabetical or specialist-author conventions dominate.

## Caveats

- Field gradients can reflect journal selection, document-type filters, team size, productivity, and author-order conventions.
- Interdisciplinary journal results may not generalize to all multidisciplinary work.
- The measure is conditioned on accepted publications and cannot separate submission behavior from editorial selection.
- Field labels built from journal lists can mix subfields and change over time.

## Links

- [venue chaperone effect](../mechanisms/venue_chaperone_effect.md)
- [chaperone-effect ratio](chaperone_effect_ratio.md)
- [chaperone-effect journal panel](../datasets/chaperone_effect_journal_panel.md)
- [random author-order chaperone null](../validations/random_author_order_chaperone_null.md)
- [alphabetical author-order chaperone null](../validations/alphabetical_author_order_chaperone_null.md)
- [accepted-publication transition denominator limit](../validations/accepted_publication_transition_denominator_limit.md)
- [journal subject-category thesaurus matching](../methods/journal_subject_category_thesaurus_matching.md)

## References

- Sekara, V., Deville, P., Ahnert, S. E., Barabasi, A.-L., Sinatra, R., & Lehmann, S. (2018). The chaperone effect in scientific publishing. *Proceedings of the National Academy of Sciences*, 115(50), 12603-12607. https://doi.org/10.1073/pnas.1800471115 [OpenAlex: W2904801760; Dimensions: pub.1110510902; WoS: unknown]

## Metadata

- Concept ID: `field_chaperone_effect_gradient`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Sekara et al. (2018) (2018)
- Latest seen paper: Sekara et al. (2018) (2018)
- Primary reference DOI: `10.1073/pnas.1800471115`
- OpenAlex ID: `W2904801760`
- Dimensions ID: `pub.1110510902`
- SciSciNet ID: `W2904801760`
- Aliases: cross-field chaperone gradient; field chaperone heterogeneity; C field gradient; interdisciplinary chaperone gradient
