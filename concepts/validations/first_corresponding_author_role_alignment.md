# First/corresponding-author role alignment

## Summary

Lead-role labels can be checked against first-author initiation and corresponding-author communication signals while retaining field-specific byline caveats.

## Canonical Form

- Unit of analysis: author-paper role, first-author flag, corresponding-author flag, field, journal, or team size.
- Typical representation: alignment table between inferred lead roles and byline/communication markers.
- Mechanism, measurement, or validation target: authorship-order validation for lead role inference.
- Empirical signature: lead-role probabilities align with first-author and corresponding-author markers more than support-role probabilities do.

## Uses in Science of Science

- Refines authorship-role validation by linking it to [author order contribution proxy limits](author_order_contribution_proxy_limits.md) and [focal paper career role signal validation](focal_paper_career_role_signal_validation.md).
- Useful as a reusable check when [journal specific author order histories](../representations/journal_specific_author_order_histories.md) is used in science-of-science inference.
- Creates cross-links to [collective credit allocation](../measures/collective_credit_allocation.md) so the motif is not interpreted in isolation.

## Operationalization

- Attach first-author and corresponding-author flags to author-paper records.
- Compare flags against lead/support role labels by journal, field, team size, and byline convention.
- Audit discordant cases rather than replacing contribution roles with author order.

## Evidence and Validations

- Verified local full text from Xu et al. (2022) uses first-author initiation and corresponding-author communication as lead-role validation signals.
- The motif ties contribution-role inference to familiar authorship-order markers while preserving proxy limits.

## Caveats

- Author-order meanings vary by field and should complement, not replace, contribution-role data.
- Corresponding-author metadata can be incomplete or journal-specific.

## Links

- [Author-order contribution-proxy limits](author_order_contribution_proxy_limits.md)
- [Focal-paper career role signal validation](focal_paper_career_role_signal_validation.md)
- [Journal-specific author-order histories](../representations/journal_specific_author_order_histories.md)
- [Collective credit allocation](../measures/collective_credit_allocation.md)
- [Corresponding-author survey frame](../methods/corresponding_author_survey_frame.md)
- [Team hierarchy credit-risk hedge](../mechanisms/team_hierarchy_credit_risk_hedge.md)

## References

- Xu, F., Wu, L., & Evans, J. A. (2022). Flat teams drive scientific innovation. *Proceedings of the National Academy of Sciences*, 119(23), e2200927119. https://doi.org/10.1073/pnas.2200927119 [OpenAlex: W4226148732; Dimensions: pub.1148413764; WoS: unknown]

## Metadata

- Concept ID: `first_corresponding_author_role_alignment`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Xu et al. (2022) (2022)
- Latest seen paper: Xu et al. (2022) (2022)
- Primary reference DOI: `10.1073/pnas.2200927119`
- OpenAlex ID: `W4226148732`
- Dimensions ID: `pub.1148413764`
- SciSciNet ID: `W4226148732`
- Aliases: first-corresponding role signal; byline-communication alignment; lead-author role alignment
